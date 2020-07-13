import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/Web/http.service';
import { WebService } from 'src/app/services/Web/web.service';
import { Params, ActivatedRoute } from '@angular/router';

export class TaskModel {
  processName = '';
  title = '';
  details = '';
  processId = '';
  processInstanceId = '';
  taskInstanceId = '';
  actions: any[] = [];
  actionsEnabled = false;
  assigneeName = '';
}

export class TaskCompletedModel {
  assigneeName = '';
  processId = '';
  processInstanceId = '';
  taskInstanceId = '';
  taskName = '';
}

@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.css']
})
export class EditTaskComponent implements OnInit {

  taskModel: TaskModel;
  taskCompletedModel: TaskCompletedModel;
  showCompletedMessage = false;

  constructor(
    private webService: WebService,
    private activatedRoute: ActivatedRoute,
  ) {
  }

  ngOnInit(): void {

    this.activatedRoute.params.subscribe({
      next: (r: any) => {
        const processId = r.processId;
        const processInstanceId = r.processInstanceId;
        const taskInstanceId = r.taskInstanceId;

        this.initialize(processId, processInstanceId, taskInstanceId);
      }
    });


  }

  initialize(processId: string, processInstanceId: string, taskInstanceId: string) {

    this.taskModel = null;
    this.showCompletedMessage = false;
    this.taskCompletedModel = null;

    if (processId != null && processInstanceId == null && taskInstanceId == null) {
      this.StartNewProcesses(processId);
    } else if (processId != null && processInstanceId != null && taskInstanceId != null) {
      // Analysis:
      // load task
      // possible responses & rendering types:
      //  completed?
      //  assinged to current user?
      //  assigned to someone else, but also related to one of the current user's groups ?
      //  assigned to a group that user can start working?
      //  assigned to a group or user and current user has no chance to work
      //  assigned to someone else but current user is god mode user.
      //    - can assign to someone else (of course including to themselves)
      //    - can change field values (of course will be logged)
      //    - can cancel completely
      //    - what else?

      this.webService.GetTaskInstanceQuery(processId, processInstanceId, taskInstanceId).subscribe({
        next: (r: any) => {
          this.taskModel = new TaskModel();

          this.taskModel.processName = r.Value.ProcessName;
          this.taskModel.title = r.Value.TaskName;
          this.taskModel.processId = processId;
          this.taskModel.processInstanceId = processInstanceId;
          this.taskModel.taskInstanceId = taskInstanceId;
          this.taskModel.actions = r.Value.Actions;
          this.taskModel.actionsEnabled = r.Value.UserTaskState.CanEdit;
          this.taskModel.assigneeName = r.Value.AssigneeName;
        }
      });
    }
  }
  StartNewProcesses(processId: string) {
    this.webService.StartNewProcessCommand(processId).subscribe({
      next: (r: any) => {
        this.taskModel = new TaskModel();
        this.taskModel.processName = r.Value.ProcessName;
        this.taskModel.title = r.Value.TaskName;
        this.taskModel.processId = processId;
        this.taskModel.processInstanceId = r.Value.ProcessInstanceId;
        this.taskModel.taskInstanceId = r.Value.TaskInstanceId;
        this.taskModel.actions = r.Value.Actions;
        this.taskModel.actionsEnabled = true;
      }
    });
  }

  submit(actionId: string) {
    console.log(actionId, this.taskModel);
    this.webService.SendUserActionCommand(
      this.taskModel.processId,
      this.taskModel.processInstanceId,
      this.taskModel.taskInstanceId,
      actionId, 'some notes of course')
      .subscribe({
        next: (r: any) => {
          console.log('action trigger result', r);
          this.showCompletedMessage = true;

          const taskCompletedModel = new TaskCompletedModel();
          taskCompletedModel.assigneeName = r.Value.AssignedName;
          taskCompletedModel.processId = this.taskModel.processId;
          taskCompletedModel.processInstanceId = this.taskModel.processInstanceId;
          taskCompletedModel.taskInstanceId = r.Value.NewTaskInstanceId;
          taskCompletedModel.taskName = r.Value.NewTaskName;

          this.taskCompletedModel = taskCompletedModel;

          // bu submit sonrasi gosterilen ekran
          // aslinda tum sureclerin listelendigi detay ekranina
          // sadece completed mesajinin eklendigi sey olabilir.
          // bu taskin actigi ve paralel de ilerleyen tasklarin
          // ayrimini yapmaya da gerek olmayabilir.

          // congrats! you completed your task!
          //  upon your task,
          //    this task is assigned to this person (or you) - or this group (and
          //      if aplicable - you can work on that since you are on that group)
          //    or
          //    these tasks are assigned
          //    and (if exists in other parallel branches)
          //    these are other ongoing tasks in this process
          //    or - this process now completed.
        }
      });
  }
}

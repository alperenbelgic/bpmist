import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpService } from 'src/app/services/Web/http.service';
import { WebService } from 'src/app/services/Web/web.service';
import { Params, ActivatedRoute, Router } from '@angular/router';
import { FormComponent } from '../form/form.component';
import { SnackBarService } from 'src/app/services/UI/snack-bar.service';

export class TaskModel {
  processName = '';
  title = '';
  details = '';
  processId = '';
  processInstanceId = '';
  taskInstanceId = '';
  taskState = '';
  form: any = null;
  set actions(value: any[]) {
    this.primaryActions = value.filter(a => a.ActionType === 'Primary');
    this.secondaryActions = value.filter(a => a.ActionType === 'Secondary');
    this.warnedActions = value.filter(a => a.ActionType === 'Warned');
  }
  assigneeName = '';
  assignmentStates = {
    assignedToCurrentUser: false,
    assignedToGroup: false,
    assignedToAnotherUser: false,
    assignedToCurrentUsersGroup: false
  };
  otherTasks = [];

  primaryActions: any[];
  warnedActions: any[];
  secondaryActions: any[];
}

export class TaskCompletedModel {
  assigneeName = '';
  processId = '';
  processInstanceId = '';
  taskInstanceId = '';
  taskName = '';
  processCompleted = false;
  processCanceled = false;
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
  otherTasksShown = true;

  isFormValid = false;

  @ViewChild('appForm') formComponent: FormComponent;

  constructor(
    private webService: WebService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private snackBar: SnackBarService
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
          this.taskModel.taskState = r.Value.TaskState;
          this.taskModel.form = r.Value.Form;
          this.taskModel.actions = r.Value.Actions;
          this.taskModel.assigneeName = r.Value.AssigneeName;
          this.taskModel.assignmentStates.assignedToAnotherUser = r.Value.UserTaskState.AssignedToAnotherUser;
          this.taskModel.assignmentStates.assignedToCurrentUser = r.Value.UserTaskState.CanEdit;
          this.taskModel.assignmentStates.assignedToCurrentUsersGroup = r.Value.UserTaskState.AssignedToCurrentUsersGroup;
          this.taskModel.assignmentStates.assignedToGroup = r.Value.UserTaskState.AssignedToGroup;
          this.taskModel.otherTasks = r.Value.OtherTasks;
        }
      });
    }
  }

  StartNewProcesses(processId: string) {
    this.webService.StartNewProcessCommand(processId).subscribe({
      next: (r: any) => {
        // EditTask/:processId/:processInstanceId/:taskInstanceId
        this.router.navigate(['EditTask', processId, r.Value.ProcessInstanceId, r.Value.TaskInstanceId]);

        // this.taskModel = new TaskModel();
        // this.taskModel.processName = r.Value.ProcessName;
        // this.taskModel.title = r.Value.TaskName;
        // this.taskModel.processId = processId;
        // this.taskModel.processInstanceId = r.Value.ProcessInstanceId;
        // this.taskModel.taskInstanceId = r.Value.TaskInstanceId;
        // this.taskModel.form = r.Value.Form;
        // this.taskModel.actions = r.Value.Actions;
        // this.taskModel.assignmentStates.assignedToAnotherUser = false;
        // this.taskModel.assignmentStates.assignedToCurrentUser = true;
        // this.taskModel.assignmentStates.assignedToCurrentUsersGroup = false;
        // this.taskModel.assignmentStates.assignedToGroup = false;
      }
    });
  }

  submit(actionId: string) {

    const returningForm = this.formComponent.getReturningForm();

    console.log(actionId, this.taskModel);
    this.webService.SendUserActionCommand(
      this.taskModel.processId,
      this.taskModel.processInstanceId,
      this.taskModel.taskInstanceId,
      actionId,
      'some notes of course',
      returningForm.DateValues,
      returningForm.TextValues)
      .subscribe({
        next: (r: any) => {

          if (actionId === 'save') {
            this.snackBar.open('Form values are saved.');
            return;
          }

          console.log('action trigger result', r);
          this.showCompletedMessage = true;

          const taskCompletedModel = new TaskCompletedModel();
          taskCompletedModel.assigneeName = r.Value.AssignedName;
          taskCompletedModel.processId = this.taskModel.processId;
          taskCompletedModel.processInstanceId = this.taskModel.processInstanceId;
          taskCompletedModel.taskInstanceId = r.Value.NewTaskInstanceId;
          taskCompletedModel.taskName = r.Value.NewTaskName;
          taskCompletedModel.processCompleted = r.Value.HasProcessCompleted;
          taskCompletedModel.processCanceled = r.Value.HasProcessCanceled;

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

  pullTask() {
    this.webService.PullTaskFromGroupCommand(
      this.taskModel.processId,
      this.taskModel.processInstanceId,
      this.taskModel.taskInstanceId)
      .subscribe({
        next: (r: any) => {
          this.initialize(
            this.taskModel.processId,
            this.taskModel.processInstanceId,
            this.taskModel.taskInstanceId);
        }
      });
  }

  showAllOtherTasks() {
    this.otherTasksShown = !this.otherTasksShown;
  }

  updateFormValidity(isFormValid: boolean) {
    this.isFormValid = isFormValid;
  }
}

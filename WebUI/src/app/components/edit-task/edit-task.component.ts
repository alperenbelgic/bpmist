import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/Web/http.service';
import { WebService } from 'src/app/services/Web/web.service';
import { Params, ActivatedRoute } from '@angular/router';

export class TaskModel {
  processName = 'Space onboarding - 211b Baker St.';
  title = 'Take photo of property';
  details = 'hodor';
  processId = '';
  processInstanceId = '';
  taskInstanceId = '';
  actions: any[] = [];
}

@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.css']
})
export class EditTaskComponent implements OnInit {

  taskModel: TaskModel;

  constructor(
    private webService: WebService,
    private activatedRoute: ActivatedRoute,

  ) {
  }

  ngOnInit(): void {

    const processId = this.activatedRoute.snapshot.paramMap.get('processId');

    // temp
    this.webService.StartNewProcessCommand(processId).subscribe({
      next: (r: any) => {
        this.taskModel = new TaskModel();
        this.taskModel.processName = r.Value.ProcessName;
        this.taskModel.title = r.Value.TaskName;
        this.taskModel.processId = processId;
        this.taskModel.processInstanceId = r.Value.ProcessInstanceId;
        this.taskModel.taskInstanceId = r.Value.TaskInstanceId;
        this.taskModel.actions = r.Value.Actions;
      }
    });
  }

  submit(actionId: string) {
    console.log(actionId, this.taskModel);
  }
}

import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/Web/http.service';
import { WebService } from 'src/app/services/Web/web.service';
import { Params, ActivatedRoute } from '@angular/router';

export class TaskModel {
  processName = 'Space onboarding - 211b Baker St.';
  title = 'Take photo of property';
  details = 'hodor';
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

    this.webService.GetProcessStartTemplateQuery(processId).subscribe({
      next: (r: any) => {
        this.taskModel = new TaskModel();
        this.taskModel.processName = r.Value.ProcessName;
        this.taskModel.title = r.Value.Task;
      }
    });
  }

  complete() {
    console.log(this.taskModel);
  }
}

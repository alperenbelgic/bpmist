import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/Web/http.service';

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
    private httpService: HttpService,
  ) {
  }

  ngOnInit(): void {
    this.taskModel = new TaskModel();

    this.httpService.post('/Task/Save', { processId: 'hello', hodor: 1 }).subscribe(r => {
      console.log('web result', r);
    });
  }

  complete() {
    console.log(this.taskModel);
  }

}

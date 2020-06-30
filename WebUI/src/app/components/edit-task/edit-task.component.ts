import { Component, OnInit } from '@angular/core';

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

  constructor() {
  }

  ngOnInit(): void {
    this.taskModel = new TaskModel();
  }

  complete() {
    console.log(this.taskModel);
  }

}

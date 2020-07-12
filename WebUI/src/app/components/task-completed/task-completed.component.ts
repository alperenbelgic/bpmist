import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-task-completed',
  templateUrl: './task-completed.component.html',
  styleUrls: ['./task-completed.component.css']
})
export class TaskCompletedComponent implements OnInit {

  @Input() taskCompletedModel: any;

  get nextTaskUrl(): string {
    return '';
  }

  constructor() { }

  ngOnInit(): void {
  }

}

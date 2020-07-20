import { Component, OnInit } from '@angular/core';
import { WebService } from 'src/app/services/Web/web.service';

@Component({
  selector: 'app-list-tasks',
  templateUrl: './list-tasks.component.html',
  styleUrls: ['./list-tasks.component.css']
})
export class ListTasksComponent implements OnInit {

  tasks: any = null;

  constructor(
    private webService: WebService
  ) { }

  ngOnInit(): void {
    this.webService.GetUserTaskInstancesQuery().subscribe({
      next: (r: any) => {
        // TODO: handle error
        this.tasks = r.Value;
      }
    });
  }

}

import { Component, OnInit, Input } from '@angular/core';
import { WebService } from 'src/app/services/Web/web.service';

@Component({
  selector: 'app-my-groups-tasks',
  templateUrl: './my-groups-tasks.component.html',
  styleUrls: ['./my-groups-tasks.component.css']
})
export class MyGroupsTasksComponent implements OnInit {

  groupsTasks: any;

  constructor(
    private webService: WebService
  ) { }

  ngOnInit(): void {
    this.webService.GetUserTaskInstancesQuery().subscribe({
      next: (r: any) => {
        // TODO: handle error
        this.groupsTasks = r.Value.GroupsTaskInstanceList;
      }
    });
  }

}

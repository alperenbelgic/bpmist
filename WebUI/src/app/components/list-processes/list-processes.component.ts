import { Component, OnInit } from '@angular/core';
import { WebService } from 'src/app/services/Web/web.service';

@Component({
  selector: 'app-list-processes',
  templateUrl: './list-processes.component.html',
  styleUrls: ['./list-processes.component.css']
})
export class ListProcessesComponent implements OnInit {

  processes: any[];

  constructor(
    private webService: WebService
  ) { }

  ngOnInit(): void {
    this.webService.GetProcessesQuery().subscribe(r => {
      console.log(r);
      this.processes = r.Value.Processes;
    });

    // temp
    this.webService.StartNewProcessCommand('lj1X3gTWSN0QCb4wLzLL').subscribe({
      next: (r: any) => {
        console.log(r);
        console.log('hodor');
      }
    });


  }
}

import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WebService {

  constructor(
    private httpService: HttpService
  ) { }

  public GetProcessesQuery(): Observable<any> {
    const endPoint = '/GetProcessesQuery/Get';
    return this.httpService.get(endPoint);
  }

  public StartNewProcessCommand(ProcessId: string): Observable<any> {
    const endPoint = '/StartNewProcessCommand/Post';
    return this.httpService.post(endPoint, { ProcessId });
  }

  public SendUserActionCommand(
    ProcessId: string, ProcessInstanceId: string, TaskInstanceId: string, ActionId: string, Notes: string): Observable<any> {
    const endPoint = '/SendUserActionCommand/Post';
    return this.httpService.post(endPoint, { ProcessId, ProcessInstanceId, TaskInstanceId, ActionId, Notes });
  }

  public GetTaskInstanceQuery(ProcessId: string, ProcessInstanceId: string, TaskInstanceId: string): Observable<any> {
    const endPoint = '/GetTaskInstanceQuery/Get';
    return this.httpService.getByParams(endPoint, { ProcessId, ProcessInstanceId, TaskInstanceId });
  }
}

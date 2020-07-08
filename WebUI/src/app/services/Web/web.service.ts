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

  public GetProcessStartTemplateQuery(ProcessId: string): Observable<any> {
    const endPoint = '/GetProcessStartTemplateQuery/Get';
    return this.httpService.getByParams(endPoint, { ProcessId });
  }

  public StartNewProcessCommand(ProcessId: string): Observable<any> {
    const endPoint = '/StartNewProcessCommand/Post';
    return this.httpService.post(endPoint, { ProcessId });
  }
}

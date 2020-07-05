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
}

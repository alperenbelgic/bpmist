import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthKeyInterceptor implements HttpInterceptor {

  constructor() { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    // const tempUserId: string = localStorage.getItem('temp_user_id');
    let tempUserId = null;
    tempUserId = '208DDB53-FDF0-41C8-A2F1-535E975CED22';
console.log('tempuserid', tempUserId);
    if (tempUserId !== '' && tempUserId != null) {

      const authReq = request.clone({
        headers: request.headers.set('temp_user_id', tempUserId)
      });

      return next.handle(authReq);
    }
    else {
      return next.handle(request);
    }
  }
}

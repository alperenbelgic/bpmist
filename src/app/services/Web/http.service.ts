import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse, HttpInterceptor, HttpRequest, HttpHandler } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable()
export class AppWebService {

  getServiceRootPath(): string {
    if (location.hostname === 'localhost') {
      return 'http://localhost:60766/api';
    }
    else {
      return '/api';
    }
  }

  constructor(private http: HttpClient, private router: Router) {

  }

  Get<T>(source: string): Observable<T> {
    return this.http.get<T>(this.getServiceRootPath() + source);
  }


  GetByParams<T>(source: string, params: any): Observable<T> {
    return this.http.get<T>(this.getServiceRootPath() + source, {
      params: params
    });
  }

  Post<T>(source: string, objectToPost: any): Observable<T> {
    console.log('http method is called:' + this.getServiceRootPath() + source);

    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };

    return this.http.post<T>(this.getServiceRootPath() + source, objectToPost, httpOptions);
  }
}



@Injectable()
export class HttpAuthInterceptorService implements HttpInterceptor {
  constructor() {
    console.log('the http interceptor is constructed!');
  }

  intercept(req: HttpRequest<any>, next: HttpHandler) {

    const authToken: string = localStorage.getItem('access_token');

    if (authToken !== '' && authToken != null) {

      const authReq = req.clone({
        headers: req.headers.set('Authorization', authToken)
      });

      return next.handle(authReq);
    }
    else {
      return next.handle(req);
    }
  }
}

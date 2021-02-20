// delete this file later, instead only have localhost addres as variable for different environments
// also consider keeping as much as web relevant files and have their .tns. equivalatns. this way, it will be easier to merge to this project.
// except package.json and those kind of files.
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse, HttpInterceptor, HttpRequest, HttpHandler } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';


import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})
export class HttpService {

    getServiceRootPath(): string {
        // use environment.production to decite to go to the real address or local
        return 'http://10.0.2.2:5000/api';
        // return 'https://bpmist-j5rxltksaa-uc.a.run.app/api';

        // if (location.hostname === 'localhost') {
        //   return 'https://10.0.2.2/api';
        // } else {
        //   return '/api';
        // }
    }

    constructor(private http: HttpClient, private router: Router) {

    }

    get<T>(source: string): Observable<T> {
        return this.http.get<T>(this.getServiceRootPath() + source);
    }


    getByParams<T>(source: string, params: any): Observable<T> {
        return this.http.get<T>(this.getServiceRootPath() + source, {
            // tslint:disable-next-line: object-literal-shorthand
            params: params
        });
    }

    post<T>(source: string, objectToPost: any): Observable<T> {
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

import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})
export class WebServiceAddress {
    get(): string {

        if (!environment.production) {
            // mobile project currently only tested by android emulator
            // as a workaround for certificate problem, we call non https service
            // the ip is emulator's connection to the host pc.n
            return 'http://10.0.2.2:5000/api';
        } else {
            // current public api
            return 'https://bpmist-j5rxltksaa-uc.a.run.app/api';
        }
    }
}

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WebServiceAddress {
  get(): string {

    if (location.hostname === 'localhost') {
      return 'https://localhost:5001/api';
    } else {
      return '/api';
    }
  }
}

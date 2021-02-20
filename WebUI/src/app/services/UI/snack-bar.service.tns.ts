import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SnackBarService {

  constructor() { }

  open(message: string, duration?: number) {
      console.log('snack bar shown: ' + message);
  }
}

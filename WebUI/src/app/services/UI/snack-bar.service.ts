import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class SnackBarService {

  constructor(private snackBar: MatSnackBar) { }

  open(message: string, duration?: number) {

    duration = duration ?? 2000;

    const matSnackBarConfig = { duration } as MatSnackBarConfig;

    this.snackBar.open(message, null, matSnackBarConfig);
  }
}

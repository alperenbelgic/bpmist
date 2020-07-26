import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';
import { SnackBarService } from '../UI/snack-bar.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private router: Router,
    private snackBar: SnackBarService
  ) { }


  private loggedIn = new BehaviorSubject<boolean>(true);

  get isLoggedIn() {
    return this.loggedIn.asObservable();
  }

  login(userName: string, password: string) {
    if ([
      '9296A486-5D25-4A40-97BA-F67CB6FBBBCC',
      '208DDB53-FDF0-41C8-A2F1-535E975CED22',
      '83B203D7-2030-4788-BE40-CB153563A979',
      'C06960E7-203F-4265-85BA-A0B59863B82D'
    ].some(i => i === userName)) {
      localStorage.setItem('temp_user_id', userName);
      this.loggedIn.next(true);
      this.router.navigate(['/']);
    }
    else {
      localStorage.setItem('temp_user_id', '');
      this.snackBar.open('Invalid user id.');
    }
  }

  logout() {
    this.loggedIn.next(false);
    this.router.navigate(['/Login']);
  }
}

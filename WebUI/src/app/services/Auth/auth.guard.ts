import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router, CanActivateChild } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanActivateChild {
  constructor(private router: Router) {
  }
  canActivateChild(
    childRoute: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    return this.canActivate(childRoute, state);
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    if (state.url === '/Login'
      || state.url === '/PrivacyPolicy'
      || state.url === '/ForgotPassword'
      || state.url.indexOf('/Register/') === 0
      || state.url.indexOf('/SetupNewPassword/') === 0) {
      // clean auth code
      return true;
    }

    const userId = localStorage.getItem('temp_user_id');

    if ([
      '9296A486-5D25-4A40-97BA-F67CB6FBBBCC',
      '208DDB53-FDF0-41C8-A2F1-535E975CED22',
      '83B203D7-2030-4788-BE40-CB153563A979',
      'C06960E7-203F-4265-85BA-A0B59863B82D'
    ].some(i => i === userId)) {
      return true;
    }
    this.router.navigate(['/Login']);

    return false;
  }

}

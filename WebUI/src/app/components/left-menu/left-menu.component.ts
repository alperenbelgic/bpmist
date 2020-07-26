import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from '../../services/Auth/auth.service';

@Component({
  selector: 'app-left-menu',
  templateUrl: './left-menu.component.html',
  styleUrls: ['./left-menu.component.css']
})
export class LeftMenuComponent implements OnInit {

  isLoggedIn$: Observable<boolean>;

  constructor(authService: AuthService) {
    this.isLoggedIn$ = authService.isLoggedIn;
  }

  ngOnInit(): void {
  }

}

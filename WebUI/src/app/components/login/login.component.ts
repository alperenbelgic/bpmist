import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/Auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService) { }

  busy = false;
  username = '';
  password = '';

  ngOnInit(): void {
    this.authService.logout();
  }

  login() {
    this.authService.login(this.username, this.password);
    console.log(this.username, this.password);
  }

}

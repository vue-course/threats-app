import {Component, OnInit} from '@angular/core';
import {AuthService} from './auth/auth.service';
import {UserService} from './auth/user.service';
import {Observable} from 'rxjs';
import {User} from './auth/login/login.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  user$: Observable<string>;
  constructor(private authService: AuthService,
              private userService: UserService) {
  }

  ngOnInit(): void {
    this.user$ = this.userService.getUser();
  }

  isLogged() {
    return this.authService.isLoggedIn();
  }
}

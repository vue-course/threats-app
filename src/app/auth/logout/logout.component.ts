import { Component, OnInit } from '@angular/core';
import {AuthService} from '../auth.service';
import {Router} from '@angular/router';
import {UserService} from '../user.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.sass']
})
export class LogoutComponent {

  constructor(private authService: AuthService,
              private router: Router,
              private userService: UserService) { }

  logout() {
    this.authService.logout();
    this.userService.setUser('');
    this.router.navigateByUrl('/login');
  }

}

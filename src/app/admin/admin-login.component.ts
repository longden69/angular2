import { Component } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html'
})

export class AdminLoginComponent {
  constructor(private userService: UserService) {}
  login(val) {
    console.log(this.userService.login(val));
  }
}

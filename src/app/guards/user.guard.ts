import { CanActivate } from '@angular/router';
import { Injectable } from '@angular/core';

import { UserService } from '../services/user.service';

@Injectable()
export class UserGuard implements CanActivate {
  constructor(private userService: UserService) {}

  canActivate() {
    if (!this.userService.checkLogin()) {
      alert('You don\'t have permision for this page !');
    }

    return this.userService.checkLogin();
  }
}

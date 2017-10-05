import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { UserService } from '../services/user.service';

@Injectable()
export class RoleGuard implements CanActivate {
  constructor(private userService: UserService) {}

  canActivate(route: ActivatedRouteSnapshot,
              state: RouterStateSnapshot) {
    console.log(route.data['roles']);
    return  this.userService.checkRoleAdmin();
  }
}

import { Injectable } from '@angular/core';

@Injectable()
export class UserService {
  public isLogin = false;
  public role: number;

  login(val) {
    if (val.username === 'admin' && val.password === 'admin') {
      this.isLogin = true;
      this.role = 2;
    }
    if (val.username === 'user' && val.password === 'user') {
      this.isLogin = true;
      this.role = 1;
    }

    return this.isLogin;
  }

  checkLogin() {
    return this.isLogin;
  }

  checkRoleAdmin() {
    if (this.role = 2) {
      return true;
    }

    return false;
  }
}

import { Component, OnInit } from '@angular/core';

export interface User {
  email: string;
}

@Component({
  selector: 'app-user-email',
  templateUrl: './user-email.component.html',
  styles: [`
      .ng-valid[required], .ng-valid.required {
          border-left: 5px solid #42A948; /* green */
      }

      .ng-invalid:not(form) {
          border-left: 5px solid #a94442; /* red */
      }
  `]
})

export class UserEmailComponent implements User, OnInit {
  email = '';
  user: User;
  timeNow = new Date();
  prefix = /^123/i;

  ngOnInit() {
    this.user = {
      email: '12sd34'
    };
  }

  onSubmit(val) {
    console.log(val);
  }

  kakka(val) {
    console.log(val);
  }

}

import { Component } from '@angular/core';

@Component ({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html'
})

export class UserListComponent {
  listUser = [
    { username: 'Alpha', email: 'alpha@gmail.com' },
    { username: 'Beta', email: 'beta@gmail.com' },
    { username: 'Foxit', email: 'Foxit@gmail.com' },
    { username: 'Eagle', email: 'Eagle@gmail.com' },
    { username: 'Storm', email: 'Storm@gmail.com' },
    { username: 'Snake', email: 'Snake@gmail.com' },
    { username: 'Hunter', email: 'Hunter@gmail.com' },
  ];
}

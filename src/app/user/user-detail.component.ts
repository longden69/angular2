import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html'
})

export class UserDetailComponent {
  @Input() userData;
}

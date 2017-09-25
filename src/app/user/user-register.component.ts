import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styles: [`
      .ng-valid[required], .ng-valid.required  {
          border-left: 5px solid #42A948; /* green */
      }

      .ng-invalid:not(form)  {
          border-left: 5px solid #a94442; /* red */
      }
  `]
})

export class UserRegisterComponent {
  @Output() onSubmitForm = new EventEmitter();

  onSubmit(val) {
    this.onSubmitForm.emit(val);
  }

}

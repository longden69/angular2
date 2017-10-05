import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TestComponent } from './test.component';
import { TestService } from './test.service';
import { UserEmailComponent } from './../user/user-email.component';

import { ValidateEmailDirective } from './../directives/validate-email.directive';

@NgModule({
	imports: [CommonModule],
	declarations: [
		TestComponent,
		UserEmailComponent,
		ValidateEmailDirective
		],
	providers: [TestService],
	exports: [TestComponent, UserEmailComponent]
})

export class TestModule {}

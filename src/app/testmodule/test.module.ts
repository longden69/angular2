import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'

import { TestComponent } from './test.component';
import { TestService } from './test.service';
import { UserEmailComponent } from './../user/user-email.component';
import { TimeFormatPipe } from './../pipes/time-format.pipe'

import { ValidateEmailDirective } from './../directives/validate-email.directive';

@NgModule({
	imports: [CommonModule, FormsModule],
	declarations: [
		TestComponent,
		UserEmailComponent,
		ValidateEmailDirective,
		TimeFormatPipe
		],
	providers: [TestService],
	exports: [TestComponent, UserEmailComponent]
})

export class TestModule {}

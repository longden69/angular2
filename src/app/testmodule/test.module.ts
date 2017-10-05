import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TestComponent } from './test.component';
import { TestService } from './test.service';

@NgModule({
	imports: [CommonModule],
	declarations: [
		TestComponent
		],
	providers: [TestService],
	exports: [TestComponent]
})

export class TestModule {}

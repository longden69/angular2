import { Component, OnInit } from '@angular/core';
import { TestService } from './test.service';

@Component({
	selector: 'app-test',
	templateUrl: './test.component.html',
	providers: [
		TestService
	]
})

export class TestComponent implements OnInit {
	keyCard: string;
	constructor(private testService: TestService ) {}

	ngOnInit() {
		this.keyCard = this.testService.getKeyCard();
	}
}

import { Injectable } from '@angular/core';

@Injectable()
export class TestService {
	getKeyCard(): string {
		return '11223344556677';
	}
}

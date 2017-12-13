import { TestBed, inject } from '@angular/core/testing';

import { DateExampleComponent } from './date-example.component';

describe('a date-example component', () => {
	let component: DateExampleComponent;

	// register all needed dependencies
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [
				DateExampleComponent
			]
		});
	});

	// instantiation through framework injection
	beforeEach(inject([DateExampleComponent], (DateExampleComponent) => {
		component = DateExampleComponent;
	}));

	it('should have an instance', () => {
		expect(component).toBeDefined();
	});
});
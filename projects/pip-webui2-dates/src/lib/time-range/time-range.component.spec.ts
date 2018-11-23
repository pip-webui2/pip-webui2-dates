import { TestBed, inject, ComponentFixture } from '@angular/core/testing';

import { PipTimeRangeComponent } from './time-range.component';
import { PipTimeRangeModule } from './time-range.module';

describe('a time-range component', () => {
    let component: PipTimeRangeComponent;
    let fixture: ComponentFixture<PipTimeRangeComponent>;

    // register all needed dependencies
    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [PipTimeRangeModule]
        });
        fixture = TestBed.createComponent(PipTimeRangeComponent);
        component = fixture.componentInstance;
    });

    // instantiation through framework injection

    it('should have an instance', () => {
        expect(component).toBeDefined();
    });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeRangeExampleComponent } from './time-range-example.component';

describe('TimeRangeExampleComponent', () => {
  let component: TimeRangeExampleComponent;
  let fixture: ComponentFixture<TimeRangeExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimeRangeExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimeRangeExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

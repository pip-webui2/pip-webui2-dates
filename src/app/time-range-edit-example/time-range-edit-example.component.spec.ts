import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeRangeEditExampleComponent } from './time-range-edit-example.component';

describe('TimeRangeEditExampleComponent', () => {
  let component: TimeRangeEditExampleComponent;
  let fixture: ComponentFixture<TimeRangeEditExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimeRangeEditExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimeRangeEditExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

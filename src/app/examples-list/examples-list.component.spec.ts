import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExamplesListComponent } from './examples-list.component';
import { ExamplesListModule } from './examples-list.module';

describe('ExamplesListComponent', () => {
  let component: ExamplesListComponent;
  let fixture: ComponentFixture<ExamplesListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ExamplesListModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExamplesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

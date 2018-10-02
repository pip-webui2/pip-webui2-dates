import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-time-range-edit-example',
  templateUrl: './time-range-edit-example.component.html'
})
export class TimeRangeEditExampleComponent implements OnInit {

  public startDate = new Date();
  public endDate = new Date();

  public startDate$: BehaviorSubject<Date> = new BehaviorSubject<Date>(this.startDate);
  public endDate$: BehaviorSubject<Date> = new BehaviorSubject<Date>(this.endDate);

  constructor() { }

  ngOnInit() {
    this.startDate.setHours(10, 0, 0, 0);
    this.endDate.setHours(this.startDate.getHours() + 10);
  }
}

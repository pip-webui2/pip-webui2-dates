import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-time-range-example',
  templateUrl: './time-range-example.component.html'
})
export class TimeRangeExampleComponent implements OnInit {
  public startDate = new Date();
  public endDate = new Date().setMinutes(this.startDate.getMinutes() + 15);

  constructor() { }

  public dateInPast: Date = new Date();

  ngOnInit() {
    this.dateInPast.setHours(this.dateInPast.getHours() - 700);
  }
}

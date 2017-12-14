import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'time-range-example',
	templateUrl: 'time-range-example.component.html',
	styleUrls: ['./time-range-example.component.scss']
})
export class TimeRangeExampleComponent implements OnInit {

	ngOnInit() { }

    public startDate = new Date();
    public endDate = new Date().setMinutes(this.startDate.getMinutes() + 15);

	
}
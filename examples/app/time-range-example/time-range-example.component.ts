import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'time-range-example',
	templateUrl: 'time-range-example.component.html',
	styleUrls: ['./time-range-example.component.scss']
})
export class TimeRangeExampleComponent implements OnInit {

	public dateInPast: Date  = new Date();

	ngOnInit() {
		this.dateInPast.setHours(this.dateInPast.getHours() - 700);
	}

    public startDate = new Date();
    public endDate = new Date().setMinutes(this.startDate.getMinutes() + 15);

}
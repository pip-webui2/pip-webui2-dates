import * as _ from 'lodash';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'time-range-edit-example',
    templateUrl: 'time-range-edit-example.component.html',
    styleUrls: ['./time-range-edit-example.component.scss']
})
export class TimeRangeEditExampleComponent implements OnInit {

    ngOnInit() { 
        this.startDate.setHours(10, 0, 0, 0);
        this.endDate.setHours(this.startDate.getHours() + 10);
    }

    public startDate = new Date();
    public endDate = new Date();

    public startDate$: BehaviorSubject<Date> = new BehaviorSubject<Date>(this.startDate);

    
}
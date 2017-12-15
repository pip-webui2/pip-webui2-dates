import * as _ from 'lodash';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'time-range-edit-example',
    templateUrl: 'time-range-edit-example.component.html',
    styleUrls: ['./time-range-edit-example.component.scss']
})
export class TimeRangeEditExampleComponent implements OnInit {

    public sources: string[] = [
        './assets/boy.png',
        './assets/girl2.png',
        './assets/boy2.png',
        './assets/girl.png',
        'https://i.pinimg.com/736x/da/af/73/daaf73960eb5a21d6bca748195f12052--lion-photography-lion-kings.jpg'
    ];
    public disabled: boolean = false;

    ngOnInit() { 
        this.startDate.setHours(10, 0, 0, 0);
        this.endDate.setHours(this.startDate.getHours() + 10);
    }

    public startDate = new Date();
    public endDate = new Date();
}
import { Component, Input, OnInit, AfterViewInit, Renderer, ElementRef } from '@angular/core';

@Component({
    selector: 'pip-time-range',
    templateUrl: 'time-range.component.html',
    styleUrls: ['./time-range.component.scss']
})
export class PipTimeRangeComponent implements OnInit, AfterViewInit {
    @Input() public showIcon = true;
    @Input() public icon = 'access_time';
    @Input() public format = 'dd MMM yyyy HH:mm';
    public startDate: Date = null;
    public endDate: Date = null;
    @Input('startDate') set start(date: any) {
        this.startDate = new Date(date);
    }

    @Input('endDate') set end(date: any) {
        this.endDate = new Date(date);
    }

    ngOnInit() { }

    constructor(
        private renderer: Renderer,
        private elRef: ElementRef
    ) {
        renderer.setElementClass(elRef.nativeElement, 'pip-time-range', true);
    }

    ngAfterViewInit() { }

}

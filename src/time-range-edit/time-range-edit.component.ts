import * as _ from 'lodash';
import { Component, Input, Output, OnInit, AfterViewInit, ViewChild, EventEmitter, Renderer, ElementRef, HostListener } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

import { TimeRangeEditTranslations } from './shared/time-range-edit.translations'

@Component({
    selector: 'pip-time-range-edit',
    templateUrl: 'time-range-edit.component.html',
    styleUrls: ['./time-range-edit.component.scss']
})
export class PipTimeRangeEditComponent implements OnInit, AfterViewInit {
    public startDate: Date = null;
    public endDate: Date = null;
    public startTime: Date = null;
    public endTime: Date = null;

    @Input() public startLabel: string = 'DATES.START_TIME';
    @Input() public endLabel: string = 'DATES.END_TIME';
    @Input() intervalInMinutes: number = 30;
    @Input('startDate') set start(date: any) {
        this.startDate = new Date(date);
        this.setStartTime(this.startDate);
    }

    @Input('endDate') set end(date: any) {
        this.endDate = new Date(date);
        this.setEndTime(this.endDate);
    }

    @Output() startDateChange: EventEmitter<any> = new EventEmitter<any>();
    @Output() endDateChange: EventEmitter<any> = new EventEmitter<any>();

    public times: any[] = [];

    ngOnInit() {
        this.generateTimes();
    }

    constructor(
        private renderer: Renderer,
        private elRef: ElementRef,
        private translate: TranslateService
    ) {
        renderer.setElementClass(elRef.nativeElement, 'pip-time-range-edit', true);

        this.translate.setTranslation('en', TimeRangeEditTranslations.en, true);
        this.translate.setTranslation('ru', TimeRangeEditTranslations.ru, true);
    }

    ngAfterViewInit() { }

    ngOnDestroy() { }

    private generateTimes() {
        if (this.intervalInMinutes <= 0 || this.intervalInMinutes > 24 * 60) {
            console.warn('pip-time-range-edit: intervalInMinutes must be > 0 and < 1440');
            this.intervalInMinutes = 30;
        }

        let start = new Date();
        start.setHours(0,0,0,0);

        for (let i = 0; i < 24 * 60; i = i + this.intervalInMinutes) {
            start.setHours(i / 60, i%60);
            let h: any = start.getHours();
            let m: any = start.getMinutes();
            h = String(h).length == 1 ? '0' + String(h) : h;
            m = String(m).length == 1 ? '0' + String(m) : m;
            this.times.push(
                { name: h + ':' + m, date: start }
            );
        }
    }

    private setStartTime(date: Date) {
        if (!this.startTime) this.startTime = new Date();
        this.startTime.setHours(date.getHours(), date.getMinutes());
    }

    private setEndTime(date: Date) {
        if (!this.endTime) this.endTime = new Date();
        this.endTime.setHours(date.getHours(), date.getMinutes());
    }

    public onStartTimeChange(startTime) {
        if (!this.startTime) this.startTime = new Date(startTime.value);
        if (!this.startDate) this.startDate = new Date();
        this.startDate.setHours(this.startTime.getHours(), this.startTime.getMinutes());
        this.startDateChange.emit(this.startDate);
    }

    public onEndTimeChange(endTime) {
        if (!this.endTime) this.endTime = this.times[0];
        if (!this.endDate) this.endDate = new Date();
        this.endDate.setHours(this.endTime.getHours(), this.endTime.getMinutes());
        this.endDateChange.emit(this.endDate);
    }

    public onStartDateChange(startDate) {
        if (!this.startTime) this.startTime = this.getTimeByDate(startDate.value);
        if (!this.startDate) this.startDate = new Date(startDate.value);
        this.startDateChange.emit(this.startDate);
    }

    public onEndDateChange(endDate) {
        if (!this.endTime) this.endTime = new Date();
        if (!this.endDate) this.endDate = new Date(endDate.value);
        this.endDateChange.emit(this.endDate);
    }

    private getTimeByDate(date: Date) {
        let d: Date = new Date();
        let intervalInMs = this.intervalInMinutes * 60 * 1000;
        d.setHours(date.getHours(), date.getMinutes(), 0, 0);
        console.log('d', d);
        for (let i = 0; i < 24 * 60 / this.intervalInMinutes; i++) {
            if (Math.abs(this.times[i].getTime() - d.getTime()) < intervalInMs) return this.times[i];
        }

        return this.times[0];
    }
}
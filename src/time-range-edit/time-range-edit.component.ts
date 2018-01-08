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
        if (this.startDate == date) return;

        this.startDate = new Date(date);
        this.setStartTime(this.startDate);
        this.checkRange();
    }

    @Input('endDate') set end(date: any) {
        if (this.endDate == date) return;

        this.endDate = new Date(date);
        this.setEndTime(this.endDate);
        this.checkRange(false);
    }

    @Output() startDateChange: EventEmitter<any> = new EventEmitter<any>();
    @Output() endDateChange: EventEmitter<any> = new EventEmitter<any>();

    public times: any[] = [];
    private range: number = this.intervalInMinutes * 60 * 1000;

    ngOnInit() {}

    constructor(
        private renderer: Renderer,
        private elRef: ElementRef,
        private translate: TranslateService
    ) {
        renderer.setElementClass(elRef.nativeElement, 'pip-time-range-edit', true);

        this.translate.setTranslation('en', TimeRangeEditTranslations.en, true);
        this.translate.setTranslation('ru', TimeRangeEditTranslations.ru, true);

        this.generateTimes();
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
                { name: h + ':' + m, date: Object.assign(start) }
            );
        }
    }

    private setStartTime(date: Date) {
        this.startTime = this.getTimeByDate(date);
    }

    private setEndTime(date: Date) {
        this.endTime = this.getTimeByDate(date);
    }

    public onStartTimeChange(startTime) {
        this.startTime = new Date(startTime.value);
        if (!this.startDate) this.startDate = new Date();
        this.startDate.setHours(this.startTime.getHours(), this.startTime.getMinutes());
        if (this.checkRange()) this.endDateChange.emit(new Date(this.endDate));
        this.startDateChange.emit(new Date(this.startDate));
    }

    public onEndTimeChange(endTime) {
        this.endTime = new Date(endTime.value);
        if (!this.endDate) this.endDate = new Date();
        this.endDate.setHours(this.endTime.getHours(), this.endTime.getMinutes());
        if (this.checkRange(false)) this.startDateChange.emit(new Date(this.startDate));
        this.endDateChange.emit(new Date(this.endDate));
    }

    public onStartDateChange(startDate) {
        this.setStartValuesByDate(startDate.value, false);
        if (this.checkRange()) this.endDateChange.emit(new Date(this.endDate));
        this.startDateChange.emit(new Date(this.startDate));
    }

    public onEndDateChange(endDate) {
        this.setEndValuesByDate(endDate.value, false);
        if (this.checkRange(false)) this.startDateChange.emit(new Date(this.startDate));
        this.endDateChange.emit(new Date(this.endDate));
    }

    private setStartValuesByDate(startDate, updateTime: boolean = true) {
        if (updateTime || !this.startTime) this.startTime = this.getTimeByDate(startDate);
        this.startDate = new Date(startDate);
        this.startDate.setHours(this.startTime.getHours(), this.startTime.getMinutes(), 0, 0);
    }

    private setEndValuesByDate(endDate, updateTime: boolean = true) {
        if (updateTime || !this.endTime) this.endTime = this.getTimeByDate(endDate);
        this.endDate = new Date(endDate);
        this.endDate.setHours(this.endTime.getHours(), this.endTime.getMinutes(), 0, 0);
    }

    private getTimeByDate(date: Date) {
        let d: Date = new Date();
        let intervalInMs = this.intervalInMinutes * 60 * 1000;
        d.setHours(date.getHours(), date.getMinutes(), 0, 0);
        for (let i = 0; i < 24 * 60 / this.intervalInMinutes; i++) {
            if (Math.abs(this.times[i].date.getTime() - d.getTime()) < intervalInMs) return this.times[i].date;
        }

        return this.times[0].date;
    }

    private checkRange(start: boolean = true) {
        if (this.startDate && this.endDate) {
            if (this.startDate.getTime() > this.endDate.getTime()) {
                if (start) this.setEndValuesByDate(new Date(this.startDate.getTime() + this.range));
                else this.setStartValuesByDate(new Date(this.endDate.getTime() - this.range));

                return true;
            } else {
                this.range = this.endDate.getTime() - this.startDate.getTime();

                return false;
            }
        }
    }
}
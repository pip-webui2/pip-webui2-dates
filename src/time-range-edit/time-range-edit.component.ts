import * as _ from 'lodash';
import { Component, Input, Output, OnInit, AfterViewInit, ViewChild, EventEmitter, Renderer, ElementRef, HostListener } from '@angular/core';

@Component({
    selector: 'pip-time-range-edit',
    templateUrl: 'time-range-edit.component.html',
    styleUrls: ['./time-range-edit.component.scss']
})
export class PipTimeRangeEditComponent implements OnInit, AfterViewInit {
   
    ngOnInit() {}

    constructor(
        private renderer: Renderer,
        private elRef: ElementRef
    ) {
        renderer.setElementClass(elRef.nativeElement, 'pip-time-range-edit', true);
    }

    ngAfterViewInit() {
        
    }

    ngOnDestroy() {

    }
}
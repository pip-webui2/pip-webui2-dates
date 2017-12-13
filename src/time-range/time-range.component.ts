import { Component, Input, Output, OnInit, AfterViewInit, EventEmitter, Renderer, ElementRef, HostListener } from '@angular/core';

@Component({
    selector: 'pip-time-range',
    templateUrl: 'time-range.component.html',
    styleUrls: ['./time-range.component.scss']
})
export class PipTimeRangeComponent implements OnInit, AfterViewInit {
    
    ngOnInit() {
      
    }

    constructor(
        private renderer: Renderer,
        private elRef: ElementRef
    ) {
        renderer.setElementClass(elRef.nativeElement, 'pip-time-range', true);
    }

    ngAfterViewInit() { }

}
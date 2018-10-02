import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PipTimeRangeModule, PipDatePipesModule } from 'pip-webui2-dates';

import { TimeRangeExampleComponent } from './time-range-example.component';

@NgModule({
  imports: [
    CommonModule,

    PipTimeRangeModule,
    PipDatePipesModule
  ],
  declarations: [TimeRangeExampleComponent]
})
export class TimeRangeExampleModule { }

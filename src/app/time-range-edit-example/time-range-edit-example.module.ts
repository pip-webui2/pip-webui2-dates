import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule, MatIconModule, MatButtonToggleModule } from '@angular/material';
import { PipTimeRangeEditModule, PipTimeRangeModule } from 'pip-webui2-dates';

import { TimeRangeEditExampleComponent } from './time-range-edit-example.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatIconModule,
    MatButtonToggleModule,

    PipTimeRangeEditModule,
    PipTimeRangeModule
  ],
  declarations: [TimeRangeEditExampleComponent]
})
export class TimeRangeEditExampleModule { }

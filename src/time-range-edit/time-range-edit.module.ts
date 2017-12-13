import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { MatButtonModule, MatIconModule } from '@angular/material';

import { PipTimeRangeModule } from '../time-range/time-range.module';

import { PipTimeRangeEditComponent } from './time-range-edit.component';

@NgModule({
  declarations: [
    PipTimeRangeEditComponent
  ],
  imports: [
    BrowserModule,
    MatButtonModule,
    MatIconModule,

    PipTimeRangeModule
  ],
  exports: [
    PipTimeRangeEditComponent
  ],
  providers: [],
})
export class PipTimeRangeEditModule { }
import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatIconModule, MatProgressBarModule } from '@angular/material';

import { PipTimeRangeComponent } from './date.component';

@NgModule({
  declarations: [
    PipTimeRangeComponent
  ],
  imports: [
    BrowserModule,
    FlexLayoutModule,
    MatIconModule,
    MatProgressBarModule
  ],
  exports: [
    PipTimeRangeComponent
  ],
  providers: [],
})
export class PipTimeRangeModule { }
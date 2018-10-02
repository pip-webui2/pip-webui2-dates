import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatIconModule } from '@angular/material';

import { PipDatePipesModule } from '../shared/pipes/pipes.module';

import { PipTimeRangeComponent } from './time-range.component';

@NgModule({
  declarations: [
    PipTimeRangeComponent
  ],
  imports: [
    BrowserModule,
    FlexLayoutModule,
    MatIconModule,

    PipDatePipesModule
  ],
  exports: [
    PipTimeRangeComponent
  ],
  providers: [],
})
export class PipTimeRangeModule { }

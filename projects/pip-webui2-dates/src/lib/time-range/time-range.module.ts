import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatIconModule } from '@angular/material';

import { PipDatePipesModule } from '../shared/pipes/pipes.module';

import { PipTimeRangeComponent } from './time-range.component';

@NgModule({
  declarations: [
    PipTimeRangeComponent
  ],
  imports: [
    CommonModule,
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

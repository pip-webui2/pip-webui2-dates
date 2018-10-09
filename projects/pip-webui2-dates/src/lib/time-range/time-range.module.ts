import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material';

import { PipDatePipesModule } from '../shared/pipes/pipes.module';

import { PipTimeRangeComponent } from './time-range.component';

@NgModule({
  declarations: [
    PipTimeRangeComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,

    PipDatePipesModule
  ],
  exports: [
    PipTimeRangeComponent
  ],
  providers: [],
})
export class PipTimeRangeModule { }

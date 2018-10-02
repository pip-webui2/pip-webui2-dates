import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { TranslateModule } from '@ngx-translate/core';
import {
  MatButtonModule,
  MatIconModule,
  MatInputModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatSelectModule
} from '@angular/material';

import { PipDatePipesModule } from '../shared/pipes/pipes.module';

import { PipTimeRangeEditComponent } from './time-range-edit.component';

@NgModule({
  declarations: [
    PipTimeRangeEditComponent
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    TranslateModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,

    PipDatePipesModule
  ],
  exports: [
    PipTimeRangeEditComponent
  ],
  providers: [],
})
export class PipTimeRangeEditModule { }

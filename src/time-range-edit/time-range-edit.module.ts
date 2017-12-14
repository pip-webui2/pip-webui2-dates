import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { FlexLayoutModule } from '@angular/flex-layout';
import { TranslateModule } from '@ngx-translate/core';
import { MatButtonModule, MatIconModule, MatInputModule, MatDatepickerModule, MatNativeDateModule, MatSelectModule } from '@angular/material';

import { PipDatePipesModule } from '../shared/pipes/pipes.module';

import { PipTimeRangeEditComponent } from './time-range-edit.component';

@NgModule({
  declarations: [
    PipTimeRangeEditComponent
  ],
  imports: [
    BrowserModule,
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
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { MatButtonModule, MatIconModule, MatButtonToggleModule } from '@angular/material';

import { TranslateModule } from '@ngx-translate/core';

import { TimeRangeEditExampleComponent } from './time-range-edit-example.component';
import { PipTimeRangeEditModule } from '../pip-webui2-dates';

@NgModule({
  declarations: [
    TimeRangeEditExampleComponent
  ],
  imports: [
    BrowserModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatIconModule,
    MatButtonToggleModule,

    TranslateModule,

    PipTimeRangeEditModule
  ],
  exports: [
    TimeRangeEditExampleComponent
  ]
})
export class TimeRangeEditExampleModule { }
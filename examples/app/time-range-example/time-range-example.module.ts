import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { MatButtonModule, MatIconModule, MatSlideToggleModule } from '@angular/material';

import { TranslateModule } from '@ngx-translate/core';

import { TimeRangeExampleComponent } from './time-range-example.component';
import { PipTimeRangeModule } from '../pip-webui2-dates';

@NgModule({
  declarations: [
    TimeRangeExampleComponent
  ],
  imports: [
    BrowserModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatIconModule,
    MatSlideToggleModule,

    TranslateModule,

    PipTimeRangeModule
  ],
  exports: [
    TimeRangeExampleComponent
  ],
  providers: [
    
  ],
})
export class TimeRangeExampleModule { }
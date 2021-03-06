import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FlexLayoutModule, BREAKPOINTS, DEFAULT_BREAKPOINTS } from '@angular/flex-layout';
import { MatToolbarModule, MatSelectModule, MatSidenavModule, MatIconModule, MatButtonModule, MatMenuModule } from '@angular/material';
import { TranslateModule } from '@ngx-translate/core';
import { PipThemesModule } from 'pip-webui2-themes';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ExamplesListModule } from './examples-list/examples-list.module';
import { TimeRangeExampleModule } from './time-range-example/time-range-example.module';
import { TimeRangeEditExampleModule } from './time-range-edit-example/time-range-edit-example.module';

export const CustomBreakPointsProvider = {
  provide: BREAKPOINTS,
  useValue: [...DEFAULT_BREAKPOINTS],
  multi: true
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatToolbarModule,
    MatSelectModule,
    MatSidenavModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    TranslateModule.forRoot(),

    PipThemesModule.forRoot(),

    AppRoutingModule,
    ExamplesListModule,
    TimeRangeExampleModule,
    TimeRangeEditExampleModule
  ],
  providers: [CustomBreakPointsProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }

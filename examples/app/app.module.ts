import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router'
import { FlexLayoutModule } from '@angular/flex-layout';
import { CustomBreakPointsProvider } from './custom-breakpoints';
import { MatToolbarModule, MatSelectModule, MatSidenavModule, MatIconModule, MatButtonModule, MatMenuModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { PipThemesModule } from 'pip-webui2-themes';

import { ExampleListModule } from './examples-list/examples-list.module';
import { AppComponent } from './app.component';

import { TimeRangeExampleModule } from './time-range-example/time-range-example.module';
import { TimeRangeExampleComponent } from './time-range-example/time-range-example.component';

import { TimeRangeEditExampleModule } from './time-range-edit-example/time-range-edit-example.module';
import { TimeRangeEditExampleComponent } from './time-range-edit-example/time-range-edit-example.component';

const appRoutes: Routes = [
  { path: 'date_time_range', component: TimeRangeExampleComponent },
  { path: 'date_time_range_edit', component: TimeRangeEditExampleComponent },
  { path: '', pathMatch: 'full', redirectTo: 'date_time_range_list' }
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    FormsModule,
    MatToolbarModule,
    MatSelectModule,
    MatIconModule,
    MatSidenavModule,
    MatButtonModule,
    MatMenuModule,
    
    TranslateModule.forRoot(),

    PipThemesModule,

    ExampleListModule,
    TimeRangeExampleModule,
    TimeRangeEditExampleModule,

    RouterModule.forRoot(appRoutes, { useHash: true })
  ],
  providers: [CustomBreakPointsProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
 
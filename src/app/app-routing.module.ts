import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TimeRangeEditExampleComponent } from './time-range-edit-example/time-range-edit-example.component';
import { TimeRangeExampleComponent } from './time-range-example/time-range-example.component';

const appRoutes: Routes = [
    { path: 'date_time_range', component: TimeRangeExampleComponent },
    { path: 'date_time_range_edit', component: TimeRangeEditExampleComponent },
    { path: '', pathMatch: 'full', redirectTo: 'date_time_range_list' }
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [RouterModule]
})
export class AppRoutingModule { }

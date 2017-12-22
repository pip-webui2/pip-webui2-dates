import { NgModule } from '@angular/core';

import { LocalizedDatePipe } from './localized-date.pipe';
import { ElapsedTimePipe } from './elapsed-date.pipe';

const PIPES = [
    LocalizedDatePipe,
    ElapsedTimePipe
];

@NgModule({
    imports: [],
    declarations: [...PIPES],
    providers: [],
    exports: [...PIPES]
})
export class PipDatePipesModule {
}
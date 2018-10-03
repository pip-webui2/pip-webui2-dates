import { DatePipe, registerLocaleData } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

import localeRu from '@angular/common/locales/ru';
import localeFr from '@angular/common/locales/fr';
import localeDe from '@angular/common/locales/de';

@Pipe({
  name: 'localizedDate',
  pure: false
})
export class LocalizedDatePipe implements PipeTransform {

  constructor(private translateService: TranslateService) {
    registerLocaleData(localeRu, 'ru');
    registerLocaleData(localeFr, 'fr');
    registerLocaleData(localeDe, 'de');
  }

  transform(value: any, pattern: string = 'mediumDate'): any {
    const datePipe: DatePipe = new DatePipe(this.translateService.currentLang);
    return datePipe.transform(value, pattern);
  }
}

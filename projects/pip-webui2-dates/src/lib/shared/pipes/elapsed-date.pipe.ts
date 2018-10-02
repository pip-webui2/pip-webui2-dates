import { OnDestroy, ChangeDetectorRef, Pipe, PipeTransform } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { Observable, of } from 'rxjs';
import { LocalizedDatePipe } from './localized-date.pipe';
import { TranslateService, LangChangeEvent } from '@ngx-translate/core';

import { ElapsedPipeTranslations } from '../translations/elapsed-pipe.translations';

@Pipe({
  name: 'elapsed',
  pure: false
})
export class ElapsedTimePipe implements PipeTransform, OnDestroy {
  private readonly async: AsyncPipe;

  private isDestroyed = false;
  private value: Date;
  private timer: Observable<string>;
  private localizedDatePipe: LocalizedDatePipe;

  constructor(
    ref: ChangeDetectorRef,
    private translateService: TranslateService
  ) {
    this.async = new AsyncPipe(ref);
    this.translateService.setTranslation('en', ElapsedPipeTranslations.en, true);
    this.translateService.setTranslation('ru', ElapsedPipeTranslations.ru, true);
    this.localizedDatePipe = new LocalizedDatePipe(this.translateService);
    this.translateService.onLangChange.subscribe((event: LangChangeEvent) => {
      this.timer = this.elapsed();
    });
  }

  public transform(obj: any, ...args: any[]): any {
    if (obj == null) {
      return '';
    }

    if (!(obj instanceof Date)) {
      throw new Error('Elapsed Pipe works only with Dates');
    }

    this.value = obj;

    if (!this.timer) {
      this.timer = this.getObservable();
    }

    return this.async.transform(this.timer);
  }

  public now(): Date {
    return new Date();
  }

  public ngOnDestroy() {
    this.isDestroyed = true;
    // on next interval, will complete
  }

  private getObservable() {
    return this.elapsed();
  }

  private elapsed(): Observable<string> {
    const now = this.now().getTime();

    // time since message was sent in seconds
    const delta = (now - this.value.getTime()) / 1000;

    // format string
    if (delta < 60) {
      return this.translateService.get(delta < 10 ? 'DATES.MOMENT_AGO' : 'DATES.SECONDS_AGO', { value: Math.floor(delta) });
    } else if (delta < 3600) {
      return this.translateService.get('DATES.MINUTES_AGO', { value: Math.floor(delta / 60) });
    } else if (delta < 86400) {
      return this.translateService.get('DATES.HOURS_AGO', { value: Math.floor(delta / 3600) });
    } else if (delta < 604800) {
      return this.translateService.get('DATES.DAYS_AGO', { value: Math.floor(delta / 86400) });
    } else if (delta < 2419200) {
      return this.translateService.get('DATES.WEEKS_AGO', { value: Math.floor(delta / 604800) });
    } else {
      return of(this.localizedDatePipe.transform(this.value));
    }
  }
}

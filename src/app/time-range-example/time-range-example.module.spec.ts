import { TimeRangeExampleModule } from './time-range-example.module';

describe('TimeRangeExampleModule', () => {
  let timeRangeExampleModule: TimeRangeExampleModule;

  beforeEach(() => {
    timeRangeExampleModule = new TimeRangeExampleModule();
  });

  it('should create an instance', () => {
    expect(timeRangeExampleModule).toBeTruthy();
  });
});

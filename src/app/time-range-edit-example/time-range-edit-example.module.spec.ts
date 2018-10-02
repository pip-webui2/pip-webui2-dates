import { TimeRangeEditExampleModule } from './time-range-edit-example.module';

describe('TimeRangeEditExampleModule', () => {
  let timeRangeEditExampleModule: TimeRangeEditExampleModule;

  beforeEach(() => {
    timeRangeEditExampleModule = new TimeRangeEditExampleModule();
  });

  it('should create an instance', () => {
    expect(timeRangeEditExampleModule).toBeTruthy();
  });
});

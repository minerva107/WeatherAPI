import { TestBed } from '@angular/core/testing';

import { WeatherHttpUtilService } from './weather-http-util.service';

describe('WeatherHttpUtilService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WeatherHttpUtilService = TestBed.get(WeatherHttpUtilService);
    expect(service).toBeTruthy();
  });
});

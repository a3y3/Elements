import { TestBed } from '@angular/core/testing';

import { WeatherFetchService } from './weather-fetch.service';

describe('WeatherFetchService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WeatherFetchService = TestBed.get(WeatherFetchService);
    expect(service).toBeTruthy();
  });
});

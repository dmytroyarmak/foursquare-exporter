/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { FoursquareApiService } from './foursquare-api.service';

describe('FoursquareApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FoursquareApiService]
    });
  });

  it('should ...', inject([FoursquareApiService], (service: FoursquareApiService) => {
    expect(service).toBeTruthy();
  }));
});

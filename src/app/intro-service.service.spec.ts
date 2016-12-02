/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { IntroServiceService } from './intro-service.service';

describe('IntroServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [IntroServiceService]
    });
  });

  it('should ...', inject([IntroServiceService], (service: IntroServiceService) => {
    expect(service).toBeTruthy();
  }));
});

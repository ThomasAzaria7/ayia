/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { APPServiceService } from './APP-Service.service';

describe('Service: APPService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [APPServiceService]
    });
  });

  it('should ...', inject([APPServiceService], (service: APPServiceService) => {
    expect(service).toBeTruthy();
  }));
});

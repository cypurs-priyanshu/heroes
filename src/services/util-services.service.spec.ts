import { TestBed } from '@angular/core/testing';

import { UtilServicesService } from './util-services.service';

describe('UtilServicesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UtilServicesService = TestBed.get(UtilServicesService);
    expect(service).toBeTruthy();
  });
});

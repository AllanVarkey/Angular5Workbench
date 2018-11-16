import { TestBed, inject } from '@angular/core/testing';

import { MapservicesService } from './mapservices.service';

describe('MapservicesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MapservicesService]
    });
  });

  it('should be created', inject([MapservicesService], (service: MapservicesService) => {
    expect(service).toBeTruthy();
  }));
});

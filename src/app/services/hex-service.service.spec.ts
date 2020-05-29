import { TestBed } from '@angular/core/testing';

import { HexServiceService } from './hex-service.service';

describe('HexServiceService', () => {
  let service: HexServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HexServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

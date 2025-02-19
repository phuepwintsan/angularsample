import { TestBed } from '@angular/core/testing';

import { ApipositonService } from './apipositon.service';

describe('ApipositonService', () => {
  let service: ApipositonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApipositonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

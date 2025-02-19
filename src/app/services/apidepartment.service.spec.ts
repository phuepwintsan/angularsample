import { TestBed } from '@angular/core/testing';

import { ApidepartmentService } from './apidepartment.service';

describe('ApidepartmentService', () => {
  let service: ApidepartmentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApidepartmentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { PatientLoginService } from './patient-login.service';

describe('PatientLoginService', () => {
  let service: PatientLoginService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PatientLoginService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { DoctorLoginService } from './doctor-login.service';

describe('DoctorLoginService', () => {
  let service: DoctorLoginService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DoctorLoginService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { OktaAuthGuardService } from './okta-auth-guard.service';

describe('OktaAuthGuardService', () => {
  let service: OktaAuthGuardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OktaAuthGuardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

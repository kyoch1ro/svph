import { TestBed, inject } from '@angular/core/testing';

import { DevAuthService } from './dev-auth.service';

describe('DevAuthService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DevAuthService]
    });
  });

  it('should be created', inject([DevAuthService], (service: DevAuthService) => {
    expect(service).toBeTruthy();
  }));
});

import { TestBed, inject } from '@angular/core/testing';

import { DevUserService } from './dev-user.service';

describe('DevUserService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DevUserService]
    });
  });

  it('should be created', inject([DevUserService], (service: DevUserService) => {
    expect(service).toBeTruthy();
  }));
});

import { TestBed, inject } from '@angular/core/testing';

import { UserResolveService } from './user-resolve.service';

describe('UserResolveService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserResolveService]
    });
  });

  it('should be created', inject([UserResolveService], (service: UserResolveService) => {
    expect(service).toBeTruthy();
  }));
});

import { TestBed } from '@angular/core/testing';

import { BrothersService } from './brothers.service';

describe('BrothersService', () => {
  let service: BrothersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BrothersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

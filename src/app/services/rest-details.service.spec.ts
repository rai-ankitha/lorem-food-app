import { TestBed } from '@angular/core/testing';

import { RestDetailsService } from './rest-details.service';

describe('RestDetailsService', () => {
  let service: RestDetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RestDetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

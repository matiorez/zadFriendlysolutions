import { TestBed } from '@angular/core/testing';

import { ApiWorkOrdersService } from './api-work-orders.service';

describe('ApiWorkOrdersService', () => {
  let service: ApiWorkOrdersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiWorkOrdersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

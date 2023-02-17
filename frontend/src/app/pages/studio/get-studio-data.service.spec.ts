import { TestBed } from '@angular/core/testing';

import { GetStudioDataService } from './get-studio-data.service';

describe('GetStudioDataService', () => {
  let service: GetStudioDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetStudioDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

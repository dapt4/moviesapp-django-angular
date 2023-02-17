import { TestBed } from '@angular/core/testing';

import { CreateeditService } from './createedit.service';

describe('CreateeditService', () => {
  let service: CreateeditService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CreateeditService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

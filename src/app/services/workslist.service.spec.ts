import { TestBed } from '@angular/core/testing';

import { WorkslistService } from './workslist.service';

describe('WorkslistService', () => {
  let service: WorkslistService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WorkslistService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { PageinfoService } from './pageinfo.service';

describe('PageinfoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PageinfoService = TestBed.get(PageinfoService);
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { CursosdiService } from './cursosdi.service';

describe('CursosdiService', () => {
  let service: CursosdiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CursosdiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { CheminService } from './chemin.service';

describe('CheminService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CheminService = TestBed.get(CheminService);
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { RulePartsService } from './rule-parts.service';

describe('RulePartsService', () => {
  let service: RulePartsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RulePartsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { WordGetterService } from './word-getter.service';

describe('WordGetterService', () => {
  let service: WordGetterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WordGetterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { SubcategoryWordListService } from './subcategory-word-list.service';

describe('SubcategoryWordListService', () => {
  let service: SubcategoryWordListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SubcategoryWordListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

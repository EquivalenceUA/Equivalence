import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchTopTermsComponent } from './search-top-terms.component';

describe('SearchTopTermsComponent', () => {
  let component: SearchTopTermsComponent;
  let fixture: ComponentFixture<SearchTopTermsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchTopTermsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchTopTermsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchTermHashComponent } from './search-term-hash.component';

describe('SearchTermHashComponent', () => {
  let component: SearchTermHashComponent;
  let fixture: ComponentFixture<SearchTermHashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchTermHashComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchTermHashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

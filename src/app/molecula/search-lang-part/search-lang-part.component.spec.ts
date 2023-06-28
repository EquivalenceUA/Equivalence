import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchLangPartComponent } from './search-lang-part.component';

describe('SearchLangPartComponent', () => {
  let component: SearchLangPartComponent;
  let fixture: ComponentFixture<SearchLangPartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchLangPartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchLangPartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchSearchbarComponent } from './search-searchbar.component';

describe('SearchSearchbarComponent', () => {
  let component: SearchSearchbarComponent;
  let fixture: ComponentFixture<SearchSearchbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchSearchbarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchSearchbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

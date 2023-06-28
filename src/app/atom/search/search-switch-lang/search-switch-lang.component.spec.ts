import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchSwitchLangComponent } from './search-switch-lang.component';

describe('SearchSwitchLangComponent', () => {
  let component: SearchSwitchLangComponent;
  let fixture: ComponentFixture<SearchSwitchLangComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchSwitchLangComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchSwitchLangComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

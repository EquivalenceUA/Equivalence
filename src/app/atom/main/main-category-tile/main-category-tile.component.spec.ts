import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainCategoryTileComponent } from './main-category-tile.component';

describe('MainCategoryTileComponent', () => {
  let component: MainCategoryTileComponent;
  let fixture: ComponentFixture<MainCategoryTileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainCategoryTileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainCategoryTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

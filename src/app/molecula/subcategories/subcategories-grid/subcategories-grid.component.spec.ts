import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubcategoriesGridComponent } from './subcategories-grid.component';

describe('SubcategoriesGridComponent', () => {
  let component: SubcategoriesGridComponent;
  let fixture: ComponentFixture<SubcategoriesGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubcategoriesGridComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubcategoriesGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

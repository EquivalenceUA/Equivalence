import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainSearchPartComponent } from './main-search-part.component';

describe('MainSearchPartComponent', () => {
  let component: MainSearchPartComponent;
  let fixture: ComponentFixture<MainSearchPartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainSearchPartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainSearchPartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

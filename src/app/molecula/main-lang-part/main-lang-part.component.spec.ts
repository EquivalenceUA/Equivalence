import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainLangPartComponent } from './main-lang-part.component';

describe('MainLangPartComponent', () => {
  let component: MainLangPartComponent;
  let fixture: ComponentFixture<MainLangPartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainLangPartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainLangPartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

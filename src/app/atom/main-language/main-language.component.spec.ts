import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainLanguageComponent } from './main-language.component';

describe('MainLanguageComponent', () => {
  let component: MainLanguageComponent;
  let fixture: ComponentFixture<MainLanguageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainLanguageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainLanguageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

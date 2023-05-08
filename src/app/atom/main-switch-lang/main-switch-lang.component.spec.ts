import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainSwitchLangComponent } from './main-switch-lang.component';

describe('MainSwitchLangComponent', () => {
  let component: MainSwitchLangComponent;
  let fixture: ComponentFixture<MainSwitchLangComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainSwitchLangComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainSwitchLangComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

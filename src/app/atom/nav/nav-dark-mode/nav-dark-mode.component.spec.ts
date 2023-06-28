import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavDarkModeComponent } from './nav-dark-mode.component';

describe('NavDarkModeComponent', () => {
  let component: NavDarkModeComponent;
  let fixture: ComponentFixture<NavDarkModeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavDarkModeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavDarkModeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

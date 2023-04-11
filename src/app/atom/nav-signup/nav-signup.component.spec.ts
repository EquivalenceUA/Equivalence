import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavSignupComponent } from './nav-signup.component';

describe('NavSignupComponent', () => {
  let component: NavSignupComponent;
  let fixture: ComponentFixture<NavSignupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavSignupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavSignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

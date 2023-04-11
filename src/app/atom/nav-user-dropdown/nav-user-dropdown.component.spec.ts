import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavUserDropdownComponent } from './nav-user-dropdown.component';

describe('NavUserDropdownComponent', () => {
  let component: NavUserDropdownComponent;
  let fixture: ComponentFixture<NavUserDropdownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavUserDropdownComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavUserDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

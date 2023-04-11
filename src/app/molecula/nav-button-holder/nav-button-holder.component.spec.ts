import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavButtonHolderComponent } from './nav-button-holder.component';

describe('NavButtonHolderComponent', () => {
  let component: NavButtonHolderComponent;
  let fixture: ComponentFixture<NavButtonHolderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavButtonHolderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavButtonHolderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

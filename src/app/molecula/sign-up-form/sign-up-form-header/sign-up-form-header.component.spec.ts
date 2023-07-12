import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignUpFormHeaderComponent } from './sign-up-form-header.component';

describe('SignUpFormHeaderComponent', () => {
  let component: SignUpFormHeaderComponent;
  let fixture: ComponentFixture<SignUpFormHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SignUpFormHeaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignUpFormHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

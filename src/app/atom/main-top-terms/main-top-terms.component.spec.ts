import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainTopTermsComponent } from './main-top-terms.component';

describe('MainTopTermsComponent', () => {
  let component: MainTopTermsComponent;
  let fixture: ComponentFixture<MainTopTermsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainTopTermsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainTopTermsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

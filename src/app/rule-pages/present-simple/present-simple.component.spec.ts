import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PresentSimpleComponent } from './present-simple.component';

describe('PresentSimpleComponent', () => {
  let component: PresentSimpleComponent;
  let fixture: ComponentFixture<PresentSimpleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PresentSimpleComponent]
    });
    fixture = TestBed.createComponent(PresentSimpleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

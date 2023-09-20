import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScwitemComponent } from './scwitem.component';

describe('ScwitemComponent', () => {
  let component: ScwitemComponent;
  let fixture: ComponentFixture<ScwitemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ScwitemComponent]
    });
    fixture = TestBed.createComponent(ScwitemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

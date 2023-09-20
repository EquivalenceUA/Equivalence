import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScwlistComponent } from './scwlist.component';

describe('ScwlistComponent', () => {
  let component: ScwlistComponent;
  let fixture: ComponentFixture<ScwlistComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ScwlistComponent]
    });
    fixture = TestBed.createComponent(ScwlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

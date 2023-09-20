import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RulePartsComponent } from './rule-parts.component';

describe('RulePartsComponent', () => {
  let component: RulePartsComponent;
  let fixture: ComponentFixture<RulePartsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RulePartsComponent]
    });
    fixture = TestBed.createComponent(RulePartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

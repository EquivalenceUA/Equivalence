import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RulePartComponent } from './rule-part.component';

describe('RulePartComponent', () => {
  let component: RulePartComponent;
  let fixture: ComponentFixture<RulePartComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RulePartComponent]
    });
    fixture = TestBed.createComponent(RulePartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RuleTileComponent } from './rule-tile.component';

describe('RuleTileComponent', () => {
  let component: RuleTileComponent;
  let fixture: ComponentFixture<RuleTileComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RuleTileComponent]
    });
    fixture = TestBed.createComponent(RuleTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WordDefHeadComponent } from './word-def-head.component';

describe('WordDefHeadComponent', () => {
  let component: WordDefHeadComponent;
  let fixture: ComponentFixture<WordDefHeadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WordDefHeadComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WordDefHeadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

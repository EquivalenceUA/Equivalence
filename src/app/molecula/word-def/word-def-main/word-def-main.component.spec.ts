import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WordDefMainComponent } from './word-def-main.component';

describe('WordDefMainComponent', () => {
  let component: WordDefMainComponent;
  let fixture: ComponentFixture<WordDefMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WordDefMainComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WordDefMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

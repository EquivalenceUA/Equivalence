import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WordDefDefinComponent } from './word-def-defin.component';

describe('WordDefDefinComponent', () => {
  let component: WordDefDefinComponent;
  let fixture: ComponentFixture<WordDefDefinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WordDefDefinComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WordDefDefinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

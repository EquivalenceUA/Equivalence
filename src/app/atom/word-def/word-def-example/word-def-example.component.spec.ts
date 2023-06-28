import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WordDefExampleComponent } from './word-def-example.component';

describe('WordDefExampleComponent', () => {
  let component: WordDefExampleComponent;
  let fixture: ComponentFixture<WordDefExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WordDefExampleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WordDefExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

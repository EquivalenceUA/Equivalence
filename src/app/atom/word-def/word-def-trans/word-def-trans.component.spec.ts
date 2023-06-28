import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WordDefTransComponent } from './word-def-trans.component';

describe('WordDefTransComponent', () => {
  let component: WordDefTransComponent;
  let fixture: ComponentFixture<WordDefTransComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WordDefTransComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WordDefTransComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

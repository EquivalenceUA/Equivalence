import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WordDefComponent } from './word-def.component';

describe('WordDefComponent', () => {
  let component: WordDefComponent;
  let fixture: ComponentFixture<WordDefComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WordDefComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WordDefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

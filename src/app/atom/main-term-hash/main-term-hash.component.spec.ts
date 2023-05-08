import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainTermHashComponent } from './main-term-hash.component';

describe('MainTermHashComponent', () => {
  let component: MainTermHashComponent;
  let fixture: ComponentFixture<MainTermHashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainTermHashComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainTermHashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

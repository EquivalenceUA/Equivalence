import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlreadyAccComponent } from './already-acc.component';

describe('AlreadyAccComponent', () => {
  let component: AlreadyAccComponent;
  let fixture: ComponentFixture<AlreadyAccComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlreadyAccComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlreadyAccComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

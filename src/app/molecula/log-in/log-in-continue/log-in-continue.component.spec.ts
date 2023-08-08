import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogInContinueComponent } from './log-in-continue.component';

describe('LogInContinueComponent', () => {
  let component: LogInContinueComponent;
  let fixture: ComponentFixture<LogInContinueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogInContinueComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LogInContinueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

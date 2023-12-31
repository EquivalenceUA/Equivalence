import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogInHeaderComponent } from './log-in-header.component';

describe('LogInHeaderComponent', () => {
  let component: LogInHeaderComponent;
  let fixture: ComponentFixture<LogInHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogInHeaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LogInHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

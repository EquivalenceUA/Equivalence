import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavNoticeComponent } from './nav-notice.component';

describe('NavNoticeComponent', () => {
  let component: NavNoticeComponent;
  let fixture: ComponentFixture<NavNoticeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavNoticeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavNoticeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

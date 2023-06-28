import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarIdiomOfTheDayComponent } from './sidebar-idiom-of-the-day.component';

describe('SidebarIdiomOfTheDayComponent', () => {
  let component: SidebarIdiomOfTheDayComponent;
  let fixture: ComponentFixture<SidebarIdiomOfTheDayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SidebarIdiomOfTheDayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SidebarIdiomOfTheDayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarSearchInputComponent } from './sidebar-search-input.component';

describe('SidebarSearchInputComponent', () => {
  let component: SidebarSearchInputComponent;
  let fixture: ComponentFixture<SidebarSearchInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SidebarSearchInputComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SidebarSearchInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

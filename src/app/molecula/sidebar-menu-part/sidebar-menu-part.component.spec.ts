import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarMenuPartComponent } from './sidebar-menu-part.component';

describe('SidebarMenuPartComponent', () => {
  let component: SidebarMenuPartComponent;
  let fixture: ComponentFixture<SidebarMenuPartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SidebarMenuPartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SidebarMenuPartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogoComponent } from 'src/app/atom/sidebar-logo/logo.component';
import { SidebarComponent } from './sidebar.component';
import { SidebarButtonComponent } from 'src/app/atom/sidebar-button/sidebar-button.component';
import { SidebarMenuPartComponent } from 'src/app/molecula/sidebar-menu-part/sidebar-menu-part.component';
import { SidebarSearchInputComponent } from 'src/app/atom/sidebar-search-input/sidebar-search-input.component';
import { SidebarIdiomOfTheDayComponent } from 'src/app/atom/sidebar-idiom-of-the-day/sidebar-idiom-of-the-day.component';




@NgModule({
  declarations: [
    LogoComponent,
    SidebarComponent,
    SidebarButtonComponent,
    SidebarMenuPartComponent,
    SidebarSearchInputComponent,
    SidebarIdiomOfTheDayComponent,
  ],
  imports: [
    CommonModule
  ],
  exports:[
    LogoComponent,
    SidebarComponent,
    SidebarButtonComponent,
    SidebarMenuPartComponent,
    SidebarSearchInputComponent,
    SidebarIdiomOfTheDayComponent,
  ]
})
export class SidebarModule { }

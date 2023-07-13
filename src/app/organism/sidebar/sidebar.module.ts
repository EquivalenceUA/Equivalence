import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { LogoComponent } from 'src/app/atom/sidebar/sidebar-logo/logo.component';
import { SidebarComponent } from './sidebar.component';
import { SidebarButtonComponent } from 'src/app/atom/sidebar/sidebar-button/sidebar-button.component';
import { SidebarMenuPartComponent } from 'src/app/molecula/sidebar-menu-part/sidebar-menu-part.component';
import { SidebarSearchInputComponent } from 'src/app/atom/sidebar/sidebar-search-input/sidebar-search-input.component';
import { SidebarIdiomOfTheDayComponent } from 'src/app/atom/sidebar/sidebar-idiom-of-the-day/sidebar-idiom-of-the-day.component';
import { SidebarSocialComponent } from 'src/app/atom/sidebar/sidebar-social/sidebar-social.component';




@NgModule({
  declarations: [
    LogoComponent,
    SidebarComponent,
    SidebarButtonComponent,
    SidebarMenuPartComponent,
    SidebarSearchInputComponent,
    SidebarIdiomOfTheDayComponent,
    SidebarSocialComponent,
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[
    LogoComponent,
    SidebarComponent,
    SidebarButtonComponent,
    SidebarMenuPartComponent,
    SidebarSearchInputComponent,
    SidebarIdiomOfTheDayComponent,
    SidebarSocialComponent,
  ]
})
export class SidebarModule { }

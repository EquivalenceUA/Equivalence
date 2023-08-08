import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { NavBreadcrumbsComponent } from 'src/app/atom/nav/nav-breadcrumbs/nav-breadcrumbs.component';
import { NavLanguageComponent } from 'src/app/atom/nav/nav-language/nav-language.component';
import { NavDarkModeComponent } from 'src/app/atom/nav/nav-dark-mode/nav-dark-mode.component';
import { NavLoginComponent } from 'src/app/atom/nav/nav-login/nav-login.component';
import { NavSignupComponent } from 'src/app/atom/nav/nav-signup/nav-signup.component';
import { NavButtonHolderComponent } from 'src/app/molecula/nav-button-holder/nav-button-holder.component';
import { FormsModule } from '@angular/forms';
import { NavAccountComponent } from 'src/app/atom/nav/nav-account/nav-account.component';
import { NavNoticeComponent } from 'src/app/atom/nav/nav-notice/nav-notice.component';
import { NavUserDropdownComponent } from 'src/app/atom/nav/nav-user-dropdown/nav-user-dropdown.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    HeaderComponent,
    NavBreadcrumbsComponent,
    NavLanguageComponent,
    NavDarkModeComponent,
    NavLoginComponent,
    NavSignupComponent,
    NavButtonHolderComponent,
    NavAccountComponent,
    NavNoticeComponent,
    NavUserDropdownComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ],
  exports: [
    HeaderComponent,
    NavBreadcrumbsComponent,
    NavLanguageComponent,
    NavDarkModeComponent,
    NavLoginComponent,
    NavSignupComponent,
    NavButtonHolderComponent,
  ]
})
export class HeaderModule { }

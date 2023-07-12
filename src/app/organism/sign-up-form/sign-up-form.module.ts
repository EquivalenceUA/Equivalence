import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignUpComponent } from './sign-up.component';
import { ContinueWithComponent } from 'src/app/molecula/sign-up-form/continue-with/continue-with.component';
import { SignUpFormComponent } from 'src/app/molecula/sign-up-form/sign-up-form/sign-up-form.component';
import { SignUpFormHeaderComponent } from 'src/app/molecula/sign-up-form/sign-up-form-header/sign-up-form-header.component';
import { FormsModule } from '@angular/forms';
import { PasswordStrengthDirective } from 'src/app/directives/password-strength.directive';




@NgModule({
  declarations: [
    SignUpComponent,
    ContinueWithComponent,
    SignUpFormComponent,
    SignUpFormHeaderComponent,
    PasswordStrengthDirective
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[
    SignUpComponent,
    ContinueWithComponent,
    SignUpFormComponent,
    SignUpFormHeaderComponent
  ]
})
export class SignUpFormModule { }

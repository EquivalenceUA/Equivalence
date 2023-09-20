import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SignUpComponent } from './sign-up.component';
import { SignUpFormComponent } from 'src/app/molecula/sign-up-form/sign-up-form/sign-up-form.component';
import { ContinueWithComponent } from 'src/app/molecula/sign-up-form/continue-with/continue-with.component';
import { SignUpFormHeaderComponent } from 'src/app/molecula/sign-up-form/sign-up-form-header/sign-up-form-header.component';
import { AlreadyAccComponent } from 'src/app/atom/sign-up/already-acc/already-acc.component';
import { RouterModule } from '@angular/router';




@NgModule({
  declarations: [
    SignUpComponent,
    SignUpFormComponent,
    ContinueWithComponent,
    SignUpFormHeaderComponent,
    AlreadyAccComponent,
    
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule
  ],
  exports:[
    SignUpComponent,
    SignUpFormComponent,
    ContinueWithComponent,
    SignUpFormHeaderComponent,
    AlreadyAccComponent,
  ]
})
export class SignUpModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogInComponent } from './log-in.component';
import { SignUpFormModule } from '../sign-up-form/sign-up-form.module';



@NgModule({
  declarations: [
    LogInComponent
  ],
  imports: [
    CommonModule,
    SignUpFormModule
  ],
  exports:[
    LogInComponent
  ]
})
export class LogInModule { }

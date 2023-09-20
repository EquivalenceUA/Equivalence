import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogInComponent } from './log-in.component';
import { LogInContinueComponent } from 'src/app/molecula/log-in/log-in-continue/log-in-continue.component';
import { LogInFormComponent } from 'src/app/molecula/log-in/log-in-form/log-in-form.component';
import { LogInHeaderComponent } from 'src/app/molecula/log-in/log-in-header/log-in-header.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    LogInComponent,
    LogInContinueComponent,
    LogInFormComponent,
    LogInHeaderComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule
  ],
  exports:[
    LogInComponent,
    LogInContinueComponent,
    LogInFormComponent,
    LogInHeaderComponent
  ]
})
export class LogInModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutMainComponent } from 'src/app/molecula/about/about-main/about-main.component';
import { AboutComponent } from './about.component';



@NgModule({
  declarations: [
    AboutComponent,
    AboutMainComponent,
  ],
  imports: [
    CommonModule
  ], 
  exports: [
    AboutComponent,
    AboutMainComponent,
  ]
})
export class AboutModule { }

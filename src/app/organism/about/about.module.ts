import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutHeaderComponent } from 'src/app/molecula/about/about-header/about-header.component';
import { AboutMainComponent } from 'src/app/molecula/about/about-main/about-main.component';
import { AboutComponent } from './about.component';



@NgModule({
  declarations: [
    AboutComponent,
    AboutHeaderComponent,
    AboutMainComponent,
  ],
  imports: [
    CommonModule
  ], 
  exports: [
    AboutComponent,
    AboutHeaderComponent,
    AboutMainComponent,
  ]
})
export class AboutModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { MainSearchComponent } from 'src/app/atom/main-search/main-search.component';
import { MainSearchPartComponent } from 'src/app/molecula/main-search-part/main-search-part.component';
import { MainLanguageComponent } from 'src/app/atom/main-language/main-language.component';
import { MainSwitchLangComponent } from 'src/app/atom/main-switch-lang/main-switch-lang.component';
import { MainLangPartComponent } from 'src/app/molecula/main-lang-part/main-lang-part.component';
import { MainButtonComponent } from 'src/app/atom/main-button/main-button.component';
import { MainTopTermsComponent } from 'src/app/atom/main-top-terms/main-top-terms.component';
import { MainTermHashComponent } from 'src/app/atom/main-term-hash/main-term-hash.component';




@NgModule({
  declarations: [
    MainComponent,
    MainSearchComponent,
    MainSearchPartComponent,
    MainLanguageComponent,
    MainSwitchLangComponent,
    MainLangPartComponent,
    MainButtonComponent,
    MainTopTermsComponent,
    MainTermHashComponent,
    
  ],
  imports: [
    CommonModule,
  ],
  exports:[
    MainComponent,
    MainSearchComponent,
    MainSearchPartComponent,
    MainLanguageComponent,
    MainSwitchLangComponent,
    MainLangPartComponent,
    MainButtonComponent,
    MainTopTermsComponent,
    MainTermHashComponent,
          
  ]
})
export class MainModule { }

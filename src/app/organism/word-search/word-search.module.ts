import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchLangPartComponent } from 'src/app/molecula/search-lang-part/search-lang-part.component';
import { WordSearchComponent } from './word-search.component';
import { SearchLanguageComponent } from 'src/app/atom/search/search-language/search-language.component';
import { SearchSwitchLangComponent } from 'src/app/atom/search/search-switch-lang/search-switch-lang.component';
import { SearchTopTermsComponent } from 'src/app/atom/search/search-top-terms/search-top-terms.component';
import { SearchSearchbarComponent } from 'src/app/atom/search/search-searchbar/search-searchbar.component';
import { SearchResultComponent } from 'src/app/atom/search/search-result/search-result.component';
import { SearchTermHashComponent } from 'src/app/atom/search/search-term-hash/search-term-hash.component';
import { SearchButtonComponent } from 'src/app/atom/search/search-button/search-button.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';





@NgModule({
  declarations: [
    WordSearchComponent,
    SearchLangPartComponent,
    SearchLanguageComponent,
    SearchSwitchLangComponent,
    SearchTopTermsComponent,
    SearchSearchbarComponent,
    SearchResultComponent,
    SearchTermHashComponent,
    SearchButtonComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
  ],
  exports: [
    WordSearchComponent,
    SearchLangPartComponent,
    SearchLanguageComponent,
    SearchSwitchLangComponent,
    SearchTopTermsComponent,
    SearchSearchbarComponent,
    SearchResultComponent,
    SearchTermHashComponent,
    SearchButtonComponent,
  ]
})
export class WordSearchModule { }

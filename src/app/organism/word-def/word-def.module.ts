import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WordDefComponent } from './word-def.component';
import { WordDefHeadComponent } from 'src/app/molecula/word-def/word-def-head/word-def-head.component';
import { WordDefMainComponent } from 'src/app/molecula/word-def/word-def-main/word-def-main.component';
import { WordDefTransComponent } from 'src/app/atom/word-def/word-def-trans/word-def-trans.component';
import { WordDefDefinComponent } from 'src/app/atom/word-def/word-def-defin/word-def-defin.component';
import { WordDefExampleComponent } from 'src/app/atom/word-def/word-def-example/word-def-example.component';
import { WordSearchModule } from '../word-search/word-search.module';





@NgModule({
  declarations: [
    WordDefComponent,
    WordDefHeadComponent,
    WordDefMainComponent,
    WordDefTransComponent,
    WordDefDefinComponent,
    WordDefExampleComponent,
  ],
  imports: [
    CommonModule,
    WordSearchModule,

  ],
  exports: [
    WordDefComponent,
    WordDefHeadComponent,
    WordDefMainComponent,
    WordDefTransComponent,
    WordDefDefinComponent,
    WordDefExampleComponent,
  ]
})
export class WordDefModule { }

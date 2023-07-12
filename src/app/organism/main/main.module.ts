import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { FormsModule } from '@angular/forms';
import { MainCategoriesComponent } from 'src/app/molecula/main/main-categories/main-categories.component';
import { MainCategoryTileComponent } from 'src/app/atom/main/main-category-tile/main-category-tile.component';
import { WordSearchModule } from '../word-search/word-search.module';
import { RouterModule } from '@angular/router';




@NgModule({
  declarations: [
    MainComponent,
    MainCategoriesComponent,
    MainCategoryTileComponent,
    
  ],
  imports: [
    CommonModule,
    FormsModule,
    WordSearchModule,
    RouterModule
  ],
  exports:[
    MainComponent,
    MainCategoriesComponent,
    MainCategoryTileComponent,
          
  ]
})
export class MainModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { FormsModule } from '@angular/forms';
import { MainCategoriesComponent } from 'src/app/molecula/main/main-categories/main-categories.component';
import { MainCategoryTileComponent } from '../../atom/main-category-tile/main-category-tile.component';
import { WordSearchModule } from '../word-search/word-search.module';
import { RouterModule } from '@angular/router';
import { SubcategoriesGridComponent } from 'src/app/molecula/subcategories/subcategories-grid/subcategories-grid.component';
import { SubcategoryComponent } from 'src/app/atom/subcategory/subcategory/subcategory.component';
import { ScwitemComponent } from 'src/app/atom/scwitem/scwitem.component';
import { ScwlistComponent } from 'src/app/molecula/scwlist/scwlist.component';
import { RulesComponent } from 'src/app/molecula/main/rules/rules.component';
import { RulePartsComponent } from 'src/app/molecula/main/rule-parts/rule-parts.component';
import { RulePartComponent } from 'src/app/atom/rule-part/rule-part.component';
import { RuleTileComponent } from 'src/app/atom/rule-tile/rule-tile.component';
import { PresentSimpleComponent } from 'src/app/rule-pages/present-simple/present-simple.component';




@NgModule({
  declarations: [
    MainComponent,
    MainCategoriesComponent,
    MainCategoryTileComponent,
    SubcategoriesGridComponent,
    SubcategoryComponent,
    ScwlistComponent,
    ScwitemComponent,
    RulesComponent,
    RuleTileComponent,
    RulePartComponent,
    RulePartsComponent,
    PresentSimpleComponent
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
    SubcategoriesGridComponent,
    SubcategoryComponent,
    ScwlistComponent,
    ScwitemComponent,
    RulesComponent,
    RuleTileComponent,
    RulePartComponent,
    RulePartsComponent,
    PresentSimpleComponent
  ]
})
export class MainModule { }

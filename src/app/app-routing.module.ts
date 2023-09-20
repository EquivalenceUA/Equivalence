import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './organism/main/main.component';
import { AboutComponent } from './organism/about/about.component';
import { WordDefComponent } from './organism/word-def/word-def.component';
import { LogInComponent } from './organism/log-in/log-in.component';
import { HomeComponent } from './organism/home/home.component';
import { SignUpComponent } from './organism/sign-up/sign-up.component';
import { MainCategoriesComponent } from './molecula/main/main-categories/main-categories.component';
import { SubcategoriesGridComponent } from './molecula/subcategories/subcategories-grid/subcategories-grid.component';
import { ScwlistComponent } from './molecula/scwlist/scwlist.component';
import { UnderMaintenanceComponent } from './organism/under-maintenance/under-maintenance.component';
import { RulesComponent } from './molecula/main/rules/rules.component';
import { RulePartsComponent } from './molecula/main/rule-parts/rule-parts.component';

const routes: Routes = [
  { path: 'sign-up', component: SignUpComponent },
  { path: 'log-in', component: LogInComponent },
  { path: '', 
    component: HomeComponent,
    children:[
      {path: '', component: MainComponent},
      {path: 'word', component: WordDefComponent },
      {path: 'categories', component: MainCategoriesComponent},
      {path: 'subcategories', component:SubcategoriesGridComponent},
      {path: 'about', component: AboutComponent },
      {path: 'subcategory-words-list', component: ScwlistComponent},
      {path: 'rules-not', component: RulesComponent},
      {path: 'rule-parts-not', component: RulePartsComponent},
      {path: 'present-simple-not', component: RulePartsComponent},

  ] },
  {path:'**', component:UnderMaintenanceComponent}

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './organism/main/main.component';
import { AboutComponent } from './organism/about/about.component';
import { WordDefComponent } from './organism/word-def/word-def.component';
import { LogInComponent } from './organism/log-in/log-in.component';
import { HomeComponent } from './organism/home/home.component';

const routes: Routes = [
  { path: '', component: LogInComponent },
  { path: 'home', 
    component: HomeComponent,
    children:[
      {path: '', component: MainComponent},
      { path: 'about', component: AboutComponent },
      { path: 'word', component: WordDefComponent },
  ] },

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

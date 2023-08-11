import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './organism/main/main.component';
import { AboutComponent } from './organism/about/about.component';
import { WordDefComponent } from './organism/word-def/word-def.component';
import { LogInComponent } from './organism/log-in/log-in.component';
import { HomeComponent } from './organism/home/home.component';
import { SignUpComponent } from './organism/sign-up/sign-up.component';

const routes: Routes = [
  { path: 'sign-up', component: SignUpComponent },
  { path: 'log-in', component: LogInComponent },
  { path: '', 
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

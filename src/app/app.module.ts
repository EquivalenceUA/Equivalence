import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainModule } from './organism/main/main.module';
import { RouterModule } from '@angular/router';
import { AboutModule } from './organism/about/about.module';
import { WordDefModule } from './organism/word-def/word-def.module';
import { WordSearchModule } from './organism/word-search/word-search.module';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { LogInModule } from './organism/log-in/log-in.module';
import { HomeModule } from './organism/home/home.module';
import { SignUpFormModule } from './organism/sign-up-form/sign-up-form.module';





@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MainModule,
    AboutModule,
    WordDefModule,
    WordSearchModule,
    LogInModule,
    RouterModule,
    HomeModule,
    SignUpFormModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderModule } from './organism/header/header.module';
import { SidebarModule } from './organism/sidebar/sidebar.module';
import { MainModule } from './organism/main/main.module';
import { RouterModule } from '@angular/router';
import { AboutModule } from './organism/about/about.module';
import { WordDefModule } from './organism/word-def/word-def.module';
import { WordSearchModule } from './organism/word-search/word-search.module';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';





@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SidebarModule,
    HeaderModule,
    MainModule,
    AboutModule,
    WordDefModule,
    WordSearchModule,
    RouterModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

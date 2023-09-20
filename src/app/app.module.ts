import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainModule } from './organism/main/main.module';
import { RouterModule } from '@angular/router';
import { AboutModule } from './organism/about/about.module';
import { WordDefModule } from './organism/word-def/word-def.module';
import { WordSearchModule } from './organism/word-search/word-search.module';
import { LogInModule } from './organism/log-in/log-in.module';
import { HomeModule } from './organism/home/home.module';
import { SignUpModule } from './organism/sign-up/sign-up.module';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { UnderMaintenanceComponent } from './organism/under-maintenance/under-maintenance.component';




@NgModule({
  declarations: [
    AppComponent,
    UnderMaintenanceComponent,

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
    SignUpModule,
    HttpClientModule,
    StoreDevtoolsModule.instrument({maxAge: 25, logOnly: environment.production}),
    StoreModule.forRoot({}, {})
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

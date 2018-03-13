import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CountUpModule } from 'countup.js-angular2';

// import { OwlModule } from 'ngx-owl-carousel';


import { AppComponent } from './app.component';
import {CommonAppModule} from './common/common-app.module';
import {HeaderComponent} from './header/header.component';
import {LandingComponent} from './landing/landing.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LandingComponent
  ],
  imports: [
    BrowserModule,
    CommonAppModule,
    CountUpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


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
    CommonAppModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

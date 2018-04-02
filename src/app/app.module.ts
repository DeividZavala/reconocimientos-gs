import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CountUpModule } from 'countup.js-angular2';

// import { OwlModule } from 'ngx-owl-carousel';


import { AppComponent } from './app.component';
import {CommonAppModule} from './common/common-app.module';
import {HeaderComponent} from './header/header.component';
import {LandingComponent} from './landing/landing.component';
import {Routes} from '@angular/router';
import { RouterModule } from '@angular/router';
import {AppService} from './app.service';
import {AboutUsComponent} from './about-us/about-us.component';
import {TeamMemberComponent} from './about-us/team-member.component';
import {ContactUsComponent} from './contact-us/contact-us.component';
import {SectionHeaderComponent} from './header/section-header.component';
import {ContactusFormComponent} from './contact-us/contactus-form.component';

const Routes: Routes = [
  {path: '', component: LandingComponent},
  {path: 'about-us', component: AboutUsComponent},
  {path: 'contact-us', component: ContactUsComponent},
  {path: '**', component: LandingComponent}
];


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LandingComponent,
    AboutUsComponent,
    ContactUsComponent,
    SectionHeaderComponent,
    ContactusFormComponent,
    TeamMemberComponent
  ],
  imports: [
    BrowserModule,
    CommonAppModule,
    CountUpModule,
    RouterModule.forRoot(Routes)
  ],
  providers: [
    AppService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

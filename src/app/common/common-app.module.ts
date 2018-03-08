import {NgModule} from '@angular/core';
import {NavComponent} from './nav/nav.component';
import {CommonModule} from '@angular/common';
import {FooterComponent} from './footer/footer.component';

@NgModule({
  declarations: [
    NavComponent,
    FooterComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    NavComponent,
    FooterComponent
  ]
})
export class CommonAppModule{}

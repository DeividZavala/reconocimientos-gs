import {NgModule} from '@angular/core';
import {NavComponent} from './nav/nav.component';
import {CommonModule} from '@angular/common';

@NgModule({
  declarations:[
    NavComponent
  ],
  imports:[
    CommonModule
  ],
  exports:[
    NavComponent
  ]
})
export class CommonAppModule{}

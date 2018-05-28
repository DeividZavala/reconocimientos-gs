import {Component} from '@angular/core';

@Component({
  selector: 'app-header',
  styleUrls: ['header.component.css'],
  template: `
    <header class="header">
      <div>
        <app-navbar></app-navbar>
      </div>
      <div class="header-title">
        <div>
          <img src="assets/img gs/GSFINAL.png" alt="graducaiones gs" class="">
        </div>
        <!--<p class="uk-margin-remove-top">Artículos de graduación y reconocimientos deportivos, empresariales y gubernamentales.</p>-->
      </div>
    </header>
  `
})
export class HeaderComponent {
  constructor() {}
}

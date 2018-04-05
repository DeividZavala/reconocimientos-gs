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
        <h1>
          La mejor opción para tu graduación
        </h1>
        <p class="uk-margin-remove-top">Artículos de graduación y reconocimientos deportivos, empresariales y gubernamentales.</p>
      </div>
    </header>
  `
})
export class HeaderComponent {
  constructor() {}
}

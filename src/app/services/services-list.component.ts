import {Component} from '@angular/core';

@Component({
  selector: 'app-services-list',
  template: `
    <app-section-header [section]="'Servicios'" [header]="'Servicios'"></app-section-header>
    <section class="uk-section">
      <div class="uk-container">
        <div class="uk-child-width-1-3 uk-grid-match uk-grid-large" uk-grid>
          <app-single-service [service]="service" *ngFor="let service of services"></app-single-service>
        </div>
      </div>
    </section>
  `
})
export class ServicesListComponent {
  services = [
    {
      'name': 'EMPRESAS',
      'services': [
        'Reconocimientos',
        'Anillos conmemorativos',
        'Cristal grabado en Sand-Blast'
      ]
    },
    {
      'name': 'ESCUELAS Y UNIVERSIDADES',
      'services': [
        'Diplomas',
        'Agradecimientos',
        'Toma de Fotografías panorámicas e individuales'
      ]
    },
    {
      'name': 'PAQUETES PARA GRADUACION',
      'services': [
        'PAQUETE DE LUJO',
        'PREMIER',
        'DIAMANTE'
      ]
    }
  ];
}


import {Component, OnInit} from '@angular/core';
import {AppService} from '../app.service';

@Component({
  selector: 'app-services-list',
  template: `
    <app-section-header [section]="'Servicios'" [header]="'Servicios'"></app-section-header>
    <section class="uk-section">
      <div class="uk-container">
        <div class="uk-child-width-1-2@m uk-child-width-1-1@s uk-grid-match uk-grid-large" uk-grid>
          <app-single-service [service]="service" *ngFor="let service of services"></app-single-service>
        </div>
      </div>
    </section>
  `
})
export class ServicesListComponent implements OnInit {
  services;

  constructor(
    private appService: AppService
  ) {}

  ngOnInit() {
    this.services = this.appService.getServices();
  }

}


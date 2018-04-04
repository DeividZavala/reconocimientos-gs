import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-single-service',
  styleUrls: ['single-service.component.css'],
  template: `
    <div class="single-service">
      <div class="uk-card">
        <div class="uk-card-media-top">
          <img class="uk-width-1-1" src="http://unifytheme.com/bin/bitap/images/service/5.jpg" alt="">
        </div>
        <div class="uk-card-body service-text">
          <h5 class="uk-card-title">
            <a href="" class="tran3s">
              {{service.name}}
            </a>
          </h5>
          <div>
            <ul class="uk-list uk-list-bullet">
              <li *ngFor="let s of service.services">{{s}}</li>
            </ul>
          </div>
          <a routerLink="/services/1" class="tran3s read-more hvr-icon-wobble-horizontal">
            Saber Más
            <i class="fas fa-caret-right"></i>
          </a>
        </div>
      </div>
    </div>
  `
})
export class SingleServiceComponent {
  @Input()
  service;
}

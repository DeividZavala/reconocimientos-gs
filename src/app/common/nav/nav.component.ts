import {Component} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-navbar',
  styleUrls: ['nav.component.css'],
  template: `
    <div class="top-header uk-width-1-1" *ngIf="router.url !== '/'">
      <div class="uk-container">
        <ul class="uk-float-left uk-margin-remove">
          <li><a href="https://www.facebook.com/gsreconocimientos/" class="tran3s">
            <i class="fab fa-facebook-f"></i>
          </a></li>
          <!--<li><a href="" class="tran3s">
            <i class="fab fa-linkedin-in"></i>
          </a></li>
          <li><a href="" class="tran3s">
            <i class="fab fa-twitter"></i>
          </a></li>
          <li><a href="" class="tran3s">
            <i class="fab fa-google-plus-g"></i>
          </a></li>-->
          <li>Horario de Oficina: 9:00 - 17:00</li>
        </ul>
      </div>
    </div>
    <nav class="uk-navbar-container uk-navbar uk-width1-1"
         [ngClass]="{'uk-navbar-transparent uk-padding': router.url === '/',
         'uk-padding-small custom-navbar': router.url !== '/'}">

      <div class="uk-navbar-left">

        <a class="uk-navbar-item uk-logo" (click)="changeRoute('')">
          <img src="/assets/img gs/gs_100x100.png" alt="" *ngIf="router.url === '/'">
          <img src="/assets/img gs/gs_100x100.png" alt="" *ngIf="router.url !== '/'">
        </a>

      </div>

      <div class="uk-navbar-right ">

        <ul class="uk-navbar-nav uk-visible@m">
          <li class=""><a (click)="changeRoute('')">Inicio</a></li>
          <li><a (click)="changeRoute('about-us')" >Sobre Nosotros</a></li>
          <li>
            <a (click)="changeRoute('services')">Servicios <span class="uk-margin-small-left"><i class="fas fa-chevron-down"></i></span></a>
            <div class="uk-navbar-dropdown" uk-dropdown="offset: 0">
              <ul class="uk-nav uk-navbar-dropdown-nav">
                <li class=""><a (click)="changeRoute('services', 1)">Empresas</a></li>
                <li><a (click)="changeRoute('services', 2)">Escuelas y Universidades</a></li>
                <!--<li><a (click)="changeRoute('services', 3)">Paquetes para Graduación</a></li>-->
              </ul>
            </div>
          </li>
          <li><a (click)="changeRoute('contact-us')">Contactanos</a></li>
        </ul>

        <div class="navbar-toppanel uk-hidden@s">
          <div class="uk-flex uk-flex-between uk-flex-stretch navbar-toppanel-inner uk-flex-middle">
            <div [ngClass]="{'out-of-landing': router.url !== '/'}"><i class="fas fa-bars"></i></div>
            <div uk-dropdown="mode: click" class="uk-width-small@l uk-width-1-1@s menu-list-container">
              <ul class="uk-list uk-navbar-dropdown-nav uk-list-divider menu-list ">
                <li class="uk-hidden@s"><a (click)="changeRoute('')">Inicio</a></li>
                <li class="uk-hidden@s"><a (click)="changeRoute('about-us')">Sobre Nosotros</a></li>
                <li class="uk-hidden@s"><a (click)="changeRoute('services')">Servicios</a></li>
                <li class="uk-hidden@s"><a (click)="changeRoute('contact-us')">Contactanos</a></li>
              </ul>
            </div>
          </div>
        </div>

      </div>

    </nav>
  `
})
export class NavComponent {

  constructor(
    public router: Router
  ) {}

  changeRoute(route: string, id?) {
    id ? this.router.navigate([route + '/' + id]) : this.router.navigate([route]);
  }

}

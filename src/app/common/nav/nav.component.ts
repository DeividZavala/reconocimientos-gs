import {Component} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-navbar',
  styleUrls: ['nav.component.css'],
  template: `
    <div class="top-header uk-width-1-1">
      <div class="uk-container">
        <ul class="uk-float-left uk-margin-remove">
          <li><a href="" class="tran3s">
            <i class="fab fa-linkedin-in"></i>
          </a></li>
          <li><a href="" class="tran3s">
            <i class="fab fa-facebook-f"></i>
          </a></li>
          <li><a href="" class="tran3s">
            <i class="fab fa-twitter"></i>
          </a></li>
          <li><a href="" class="tran3s">
            <i class="fab fa-google-plus-g"></i>
          </a></li>
          <li>Horario de Oficina: 9:00 - 17:00</li>
        </ul>
      </div>
    </div>
    <nav class="uk-navbar-container uk-navbar uk-width1-1"
         [ngClass]="{'uk-navbar-transparent uk-padding': router.url === '/',
         'uk-padding-small custom-navbar': router.url !== '/'}"
         *ngIf="router.url !== '/'">

      <div class="uk-navbar-left">

        <a href="" class="uk-navbar-item uk-logo">
          <img src="/assets/img gs/gs2.png" alt="">
        </a>

      </div>

      <div class="uk-navbar-right uk-visible@m">

        <ul class="uk-navbar-nav">
          <li class=""><a href="">Inicio</a></li>
          <li><a (click)="changeRoute('about-us')" >Sobre Nosotros</a></li>
          <li>
            <a href="#">Servicios <span class="uk-margin-small-left"><i class="fas fa-chevron-down"></i></span></a>
            <div class="uk-navbar-dropdown" uk-dropdown="offset: 0">
              <ul class="uk-nav uk-navbar-dropdown-nav">
                <li class=""><a href="#">Reconocimientos</a></li>
                <li><a href="#">Paquetes de graduación</a></li>
                <li><a href="#">Paquetes para empresas</a></li>
              </ul>
            </div>
          </li>
          <li><a href="#">Contactanos</a></li>
        </ul>

      </div>

    </nav>
  `
})
export class NavComponent {

  constructor(
    public router: Router
  ) {}

  changeRoute(route: string) {
    this.router.navigate([route]);
  }

}

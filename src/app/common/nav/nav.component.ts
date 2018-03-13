import {Component} from '@angular/core';

@Component({
  selector: 'app-navbar',
  template: `
    <nav class="uk-navbar-container uk-navbar uk-navbar-transparent" uk-navbar>

      <div class="uk-navbar-left uk-padding">

        <a href="" class="uk-navbar-item uk-logo">
          <img src="http://unifytheme.com/bin/bitap/images/logo/logo.png" alt="">
        </a>

      </div>

      <div class="uk-navbar-right uk-padding uk-visible@m">

        <ul class="uk-navbar-nav">
          <li class=""><a href="#">Inicio</a></li>
          <li><a href="#">Sobre Nosotros</a></li>
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
export class NavComponent {}

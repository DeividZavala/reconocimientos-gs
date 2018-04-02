import {Component} from '@angular/core';

@Component({
  selector: 'app-footer',
  styleUrls: ['footer.component.css'],
  template: `
    <footer class="padding-top">
      <div class="uk-container">
        <div class="uk-child-width-1-4@m uk-child-width-1-1@s uk-flex-middle" uk-grid>
          <div>
            <a href="" class="uk-logo">
              <img src="/assets/img gs/gs_100x100.png" alt="">
            </a>
            <p class="uk-text-muted">
              VISIÓN
              Lograr expandirnos en diversos Estados y países por medio de la fabricación y
              especialización de cada uno de los productos que ofrecemos.
            </p>
          </div>
          <div class="footer-list">
            <h5>Saber más</h5>
            <ul class="uk-padding-remove">
              <li><a class="tran3s" href="">Garantia</a></li>
              <li><a class="tran3s" href="">Como funciona</a></li>
              <li><a class="tran3s" href="">Precios</a></li>
              <li><a class="tran3s" href="">Modelos</a></li>
            </ul>
          </div>
          <div class="footer-list">
            <h5>Acerca de</h5>
            <ul class="uk-padding-remove">
              <li><a class="tran3s" href="">Testimonios</a></li>
              <li><a class="tran3s" href="">Nosotros</a></li>
              <li><a class="tran3s" href="">Equipo</a></li>
              <li><a class="tran3s" href="">Trabajo</a></li>
            </ul>
          </div>
          <div class="">
            <h5>Siguenos</h5>
            <div class="uk-flex follow-icons">
              <div class="uk-margin-small-right">
                <a href="">
                  <i class="fab fa-facebook-f fa-lg"></i>
                </a>
              </div>
              <div class="uk-margin-small-right">
                <a href="">
                  <i class="fab fa-twitter fa-lg"></i>
                </a>
              </div>
              <div class="uk-margin-small-right">
                <a href="">
                  <i class="fab fa-instagram fa-lg"></i>
                </a>
              </div>
              <div class="uk-margin-small-right">
                <a href="">
                  <i class="fab fa-google-plus-g fa-lg"></i>
                </a>
              </div>
              <div class="uk-margin-small-right">
                <a href="">
                  <i class="fab fa-linkedin-in fa-lg"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div class="bottom-footer"></div>
      </div>
    </footer>
  `
})
export class FooterComponent {}

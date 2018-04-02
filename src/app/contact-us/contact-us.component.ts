import {Component} from '@angular/core';

@Component({
  selector: 'app-contactus',
  styleUrls: ['contact-us.component.css'],
  template: `
    <app-section-header [header]="'Contactanos'" [section]="'contacto'" ></app-section-header>
    <section class="uk-section">
      <div class="uk-container">
        <div class="uk-grid-medium uk-grid-match" uk-grid>
          <div class="uk-width-2-5">
            <iframe
              frameborder="0" style="border:0"
              src="https://www.google.com/maps/embed/v1/place?key=AIzaSyCngbzHv03wpM1YRkWRwtzvXzrscX_ccEg
                      &q=Avenida+Francisco+I.+Madero+16,+Centro,+Ciudad+de+México,+CDMX" allowfullscreen>
            </iframe>
          </div>
          <div class="uk-width-3-5">
            <app-contactus-form></app-contactus-form>
          </div>
        </div>
      </div>
    </section>
    <section class="uk-section">
      <div class="uk-container">
        <div class="uk-child-width-1-3 uk-grid-match uk-text-center" uk-grid>
          <div>
            <div class="single-address" >
              <i class="fas fa-map-marker-alt single-address-icon"></i>
              <h3 class="uk-margin-small-top">Nuestra Direccioón</h3>
              <p class="uk-text-muted">
                <span>60 Grant Ave. Central New</span>
                <span>Road 0708, UK</span>
              </p>
            </div>
          </div>
          <div>
            <div class="single-address">
              <i class="fas fa-at single-address-icon"></i>
              <h3 class="uk-margin-small-top">Télefono y Correo</h3>
              <p class="uk-text-muted">
                <span>(+880) xxx-xxx-788 & xxx-777</span>
                <span>sample@gmail.com</span>
              </p>
            </div>
          </div>
          <div>
            <div class="single-address">
              <i class="fas fa-share-alt single-address-icon"></i>
              <h3 class="uk-margin-small-top">Mantente en contacto</h3>
              <div class="uk-text-muted">
                <span>Siguenos en redes sociales</span>
                <div class="uk-flex follow-icons uk-flex-center uk-margin-small-top">
                  <div class="uk-margin-small-right">
                    <a href="">
                      <i class="fab fa-facebook-f fa-lg tran3s"></i>
                    </a>
                  </div>
                  <div class="uk-margin-small-right">
                    <a href="">
                      <i class="fab fa-twitter fa-lg tran3s"></i>
                    </a>
                  </div>
                  <div class="uk-margin-small-right">
                    <a href="">
                      <i class="fab fa-google-plus-g fa-lg tran3s"></i>
                    </a>
                  </div>
                  <div class="uk-margin-small-right">
                    <a href="">
                      <i class="fab fa-linkedin-in fa-lg tran3s"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `
})
export class ContactUsComponent {}

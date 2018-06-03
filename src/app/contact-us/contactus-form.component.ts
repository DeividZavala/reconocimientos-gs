import {Component} from '@angular/core';
import UIkit from 'uikit';
import {Router} from '@angular/router';
import {AppService} from '../app.service';


@Component({
  selector: 'app-contactus-form',
  styleUrls: ['contactus-form.component.css'],
  template: `
    <div id="form-overlay" [ngClass]="{'visible': sending}">
      <div class="spinner">
        <div class="double-bounce1"></div>
        <div class="double-bounce2"></div>
      </div>
      <div>
        Enviando tu mensaje, espera un momento...
      </div>
    </div>
  <form class="uk-form-stacked" (ngSubmit)="handleSubmit(form, form.valid)" #form="ngForm" >

          <div class="uk-margin uk-width-1-1">
            <label class="uk-form-label" for="usern-email">Ingresa tu correo</label>
            <div class="uk-form-controls">
              <input class="uk-input uk-form-large tran3s"
                     name="email"
                     ngModel
                     #email="ngModel"
                     id="usern-email"
                     type="email"
                     required
                     placeholder="Tu Email"
                     onfocus="this.placeholder = ''"
                     onblur="this.placeholder = 'Tu Email'">
            </div>
          </div>

          <div class="uk-grid-small" uk-grid>
            <div class="uk-width-1-2">
              <label class="uk-form-label" for="user-name">Nombre</label>
              <div class="uk-form-controls">
                <input class="uk-input uk-form-large tran3s"
                       required
                       name="name"
                       ngModel
                       #name="ngModel"
                       id="user-name" type="text"
                       placeholder="Nombre"
                       onfocus="this.placeholder = ''"
                       onblur="this.placeholder = 'Nombre'">
              </div>
            </div>

            <div class="uk-width-1-2">
              <label class="uk-form-label" for="user-lastname">Apellido</label>
              <div class="uk-form-controls">
                <input class="uk-input uk-form-large tran3s"
                       required
                       name="lastname"
                       ngModel
                       #lastname="ngModel"
                       id="user-lastname"
                       type="text"
                       placeholder="Apellido"
                       onfocus="this.placeholder = ''"
                       onblur="this.placeholder = 'Apellido'">
              </div>
            </div>
          </div>

          <div class="uk-margin uk-width-1-1">
            <label class="uk-form-label" for="usern-email">Ingresa tu télefono</label>
            <div class="uk-form-controls">
              <input class="uk-input uk-form-large tran3s"
                     name="phone"
                     ngModel
                     #email="ngModel"
                     id="usern-phone"
                     type="text"
                     required
                     placeholder="Tu télefono"
                     onfocus="this.placeholder = ''"
                     onblur="this.placeholder = 'Tu télefono'">
            </div>
          </div>

          <div class="uk-margin">
            <label class="uk-form-label" for="message">Mensaje</label>
            <textarea class="uk-textarea uk-form-large tran3s"
                      required
                      name="message"
                      ngModel
                      #message="ngModel"
                      rows="5"
                      placeholder=""
                      id="message"></textarea>
          </div>
          <button class="hvr-float-shadow tran3s btn-border-round">Enviar mensaje</button>
        </form>
`
})
export class ContactusFormComponent {

  constructor(
    private appService: AppService,
    private router: Router
  ) {}

  sending: Boolean = false;

  handleSubmit(form, isValid: boolean) {
    this.sending = true;
    if (isValid) {
      this.appService.sendMessage(form.value)
        .then(() => {
          form.reset();
          this.sending = false;
          UIkit.notification({message: '<span uk-icon=\'icon: check\'></span> Mensaje enviado', status: 'success'});
          this.router.navigate(['/']);
        })
        .catch(() => this.sending = false);
    }
  }

}

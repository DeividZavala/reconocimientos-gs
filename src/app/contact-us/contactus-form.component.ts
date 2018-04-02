import {Component} from '@angular/core';

@Component({
  selector: 'app-contactus-form',
  styleUrls: ['contactus-form.component.css'],
  template: `
  <form class="uk-form-stacked">

          <div class="uk-margin uk-width-1-1">
            <label class="uk-form-label" for="usern-email">Ingresa tu correo</label>
            <div class="uk-form-controls">
              <input class="uk-input uk-form-large tran3s"
                     id="usern-email"
                     type="email"
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
                       id="user-lastname"
                       type="text"
                       placeholder="Apellido"
                       onfocus="this.placeholder = ''"
                       onblur="this.placeholder = 'Apellido'">
              </div>
            </div>
          </div>

          <div class="uk-margin">
            <label class="uk-form-label" for="message">Mensaje</label>
            <textarea class="uk-textarea uk-form-large tran3s" rows="5" placeholder="" id="message"></textarea>
          </div>
          <button class="hvr-float-shadow tran3s btn-border-round">Enviar mensaje</button>
        </form>
`
})
export class ContactusFormComponent {}

import {Component} from '@angular/core';

@Component({
  selector: 'app-navbar',
  template: `
    <nav class="uk-navbar-container uk-navbar uk-navbar-transparent uk-padding-small" uk-navbar>

      <div class="uk-navbar-left">

        <a href="" class="uk-navbar-item uk-logo">
          <img src="http://unifytheme.com/bin/bitap/images/logo/logo.png" alt="">
        </a>

      </div>

      <div class="uk-navbar-right">

        <ul class="uk-navbar-nav">
          <li class=""><a href="#">Active</a></li>
          <li>
            <a href="#">Parent</a>
            <div class="uk-navbar-dropdown">
              <ul class="uk-nav uk-navbar-dropdown-nav">
                <li class=""><a href="#">Active</a></li>
                <li><a href="#">Item</a></li>
                <li><a href="#">Item</a></li>
              </ul>
            </div>
          </li>
          <li><a href="#">Item</a></li>
        </ul>

      </div>

    </nav>
  `
})
export class NavComponent{}

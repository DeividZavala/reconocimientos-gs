import {Component} from '@angular/core';

@Component ({
  selector: 'app-about-us',
  styleUrls: ['about-us.component.css'],
  templateUrl: 'about-us.component.html'
})
export class AboutUsComponent {

  targets: any = {
    'projects': 10000,
    'years': 20,
    'workes': 20
  };

  constructor() {}
}

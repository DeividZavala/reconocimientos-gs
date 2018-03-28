import {Component, OnInit} from '@angular/core';
import 'uikit/dist/css/uikit.min.css';
import {AppService} from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  isHome: boolean;

  ngOnInit() {
    this.isHome = this.as.getRoute('/');
  }

  constructor(
    private as: AppService
  ) {}

}


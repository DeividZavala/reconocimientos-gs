import {Component, OnInit} from '@angular/core';
import 'uikit/dist/css/uikit.min.css';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  ngOnInit() {}

  constructor(
    public router: Router
  ) {}

}


import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {AppService} from '../app.service';
// import {OwlCarousel} from 'ngx-owl-carousel';

@Component({
  selector: 'app-landing',
  styleUrls: ['landing.component.css'],
  templateUrl: 'landing.component.html'
})
export class LandingComponent implements OnInit {

  services;
  targets: any = {
    'projects': 10000,
    'years': 20,
    'workes': 20
  };

  options: any = {
    useEasing: true,
    useGrouping: true,
    separator: ',',
    decimal: '.',
    prefix: '$',
  };

  ngOnInit() {
    particlesJS.load('particles-js', 'assets/particles.json', function() {
      console.log('callback - particles.js config loaded');
    });
    this.services = this.appService.getServices();
  }

  constructor(
    public router: Router,
    private appService: AppService
  ) {}

  changeRoute(route: string) {
    this.router.navigate([route]);
  }

}

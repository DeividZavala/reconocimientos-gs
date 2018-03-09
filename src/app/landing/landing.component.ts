import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-landing',
  styleUrls: ['landing.component.css'],
  templateUrl: 'landing.component.html'
})
export class LandingComponent implements OnInit {
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
  }

}

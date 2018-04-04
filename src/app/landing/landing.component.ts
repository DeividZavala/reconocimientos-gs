import {Component, OnInit} from '@angular/core';
// import {OwlCarousel} from 'ngx-owl-carousel';

@Component({
  selector: 'app-landing',
  styleUrls: ['landing.component.css'],
  templateUrl: 'landing.component.html'
})
export class LandingComponent implements OnInit {

  services = [
    {
      'name': 'EMPRESAS',
      'services': [
        'Reconocimientos',
        'Anillos conmemorativos',
        'Cristal grabado en Sand-Blast'
      ]
    },
    {
      'name': 'ESCUELAS Y UNIVERSIDADES',
      'services': [
        'Diplomas',
        'Agradecimientos',
        'Toma de Fotografías panorámicas e individuales'
      ]
    },
    {
      'name': 'PAQUETES PARA GRADUACION',
      'services': [
        'PAQUETE DE LUJO',
        'PREMIER',
        'DIAMANTE'
      ]
    }
  ];
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

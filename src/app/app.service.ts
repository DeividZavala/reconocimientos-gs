import {Injectable} from '@angular/core';

@Injectable()
export class AppService {

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

  constructor() {}

  getServices() {
    return this.services;
  }
}

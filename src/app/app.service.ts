import {Injectable} from '@angular/core';

@Injectable()
export class AppService {

  services = [
    {
      'id': 1,
      'name': 'EMPRESARIALES Y DEPORTIVOS',
      'services': [
        'Reconocimientos en base de madera con placas de aluminio',
        'Reconocimientos de cristal',
        'Anillos de oro',
        'Anillos de plata',
        'Fistoles o pines',
        'Medallas',
        'Llaveros metálicos',
        'Placas o bustos fundidos en acero',
        'Tazas y vasos grabados en Sand Blast',
        'Carpetas de piel y curpiel grabadas',
        'Maquila de grabado en madera, aluminio, acrílico y piel'
      ]
    },
    {
      'id': 2,
      'name': 'ESCOLARES Y UNIVERSITARIOS',
      'services': [
        'Diplomas',
        'Agradecimientos',
        'Fotografías panorámicas enmarcadas',
        'Fotografías panorámicas en papel',
        'Fotografías individuales enmarcadas',
        'Fotografías individuales en papel',
        'Renta de togas y birretes',
        'Anillos de oro',
        'Anillos de plata',
        'Fistoles o pines',
        'Tarros grabados',
        'Chamarras y playeras bordadas'
]
    }
  ];

  constructor() {}

  getServices() {
    return this.services;
  }
}

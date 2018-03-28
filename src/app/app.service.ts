import {Injectable} from '@angular/core';
import {Router} from '@angular/router';

@Injectable()
export class AppService {
  constructor(
    private router: Router
  ) {}

  getRoute(route: string) {
    return this.router.url === route;
  }

}

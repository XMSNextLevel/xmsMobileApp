import {Injectable } from '@angular/core';
import { Observable }     from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class Common {
  constructor() { }

  private baseUrl: string = 'http://app-m.objectbrains.com:7070/mobile-api';

  formatNumberAmounts(amount: string) {
    return amount.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  getBaseUrl(): string {
    return this.baseUrl;
  }
}

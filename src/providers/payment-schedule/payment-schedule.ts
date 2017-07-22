import { Injectable } from '@angular/core';
import { HttpClient } from '../http-client';
import { HttpHelper } from '../http-helpers';
import { LoanProvider, LoanInfo } from '../loan/loan';
import { Common } from '../common';
import 'rxjs/add/operator/map';

export class PaymentSchedule {
  dueAmount: string;
  dueDate: string;
}

@Injectable()
export class PaymentScheduleProvider {

  private baseUrl: string = this.common.getBaseUrl();
  private Login: boolean = false;
  private httpHelper: HttpHelper = new HttpHelper();

  constructor(private http: HttpClient,
    private common: Common) {
  }

  getPaymentSchedule(loanPk: String) {
    let cr = [{ key: 'loanPk', val: loanPk }];
    return this.http.get(`${this.baseUrl}/rest/loandata/getPaymentSchedule`, cr);
  }

}

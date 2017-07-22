import { Injectable } from '@angular/core';
import { HttpClient } from '../http-client';
import { HttpHelper } from '../http-helpers';
import { LoanProvider, LoanInfo } from '../loan/loan';
import 'rxjs/add/operator/map';

export class TransactionHistory {
  transactionDate: string;
  applyDate: string;
  totalAmount: string;
}


@Injectable()
export class TransactionHistoryProvider {

  private baseUrl: string = 'http://app-m.objectbrains.com:7070/mobile-api';
  private Login: boolean = false;
  private httpHelper: HttpHelper = new HttpHelper();

  constructor(public http: HttpClient) {
  }

  getTransactionHistory(loanPk: String) {
    let cr = [{ key: 'loanPk', val: loanPk }];
    return this.http.get(`${this.baseUrl}/rest/loandata/getTransactionHistory`, cr);
  }

}

import { Injectable } from '@angular/core';
import { HttpClient } from '../http-client';
import { HttpHelper } from '../http-helpers';
import { Common } from '../common';
import 'rxjs/add/operator/map';

export class LoanInfo {
  loanPk: string;
  borrowerPk: string;
  principalBalance: string;
  nextDueDate: string;
  nextPaymentAmount: string;
}

/*
  Generated class for the LoanProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class LoanProvider {
  private loanInfo: LoanInfo;

  private loanPk: string = '';

  private baseUrl: string = this.common.getBaseUrl();
  private httpHelper: HttpHelper = new HttpHelper();

  constructor(private http: HttpClient,
    private common: Common) {
    console.log('Hello LoanProvider Provider');
  }

  setLoanPk(loanPk: string) {
    this.loanPk = loanPk;
  }

  getBasicInfo() {
    return this.http.get(`${this.baseUrl}/rest/borrower/getBasicLoanInfo`, null);

  }

  setLoanInfo(loanInfo: LoanInfo) {
    this.loanInfo = loanInfo;
  }

  getLoanInfo() {
    return this.loanInfo;
  }

  getLoanPk() {
    return this.loanPk;
  }

}

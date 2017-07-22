import { Injectable } from '@angular/core';
import { HttpClient } from '../http-client';
import { HttpHelper } from '../http-helpers';
import { Common } from '../common';
import 'rxjs/add/operator/map';

export class CreditCardInfo {
  loanPk: string = '';
  address: string = '';
  city: string = '';
  state: string = '';
  zip: string = '';
  ccExpDate: string = '';
  ccFirstName: string = '';
  ccLastName: string = '';
  ccNumber: string = '';
  ccType: string = '';
  ccVV: string = '';
  paymentDate: string = '';
  paymentAmount: string = '';
  feeAmount: string = '';
}

export class AchInfo {
  loanPk: string;
  borrowerPk: string;
  name: string;
  sendPaymentReminder: string; // boolean
  useBankDataOnFile: string; // boolean
  bankName: string;
  accountType: string;  //checking and savings
  accountNumber: string;
  routingNumber: string;
  businessAccount: string; // boolean
  paymentAmount: string;
  postingDate: string;
  isDataAvailable: string;
}

export class PaymentInfo {
  paymentDate: string;
  paymentAmount: string;
  feeAmount: string;
}

export class PaymentResponse {
  paymentResponse: string;
}

/*
  Generated class for the LoginProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/

@Injectable()
export class PaymentProvider {

  private baseUrl: string = this.common.getBaseUrl();
  private httpHelper: HttpHelper = new HttpHelper();
  private achInfoSubmitted = false;
  private ccInfoSubmitted = false;
  private creditCardInfo: CreditCardInfo;
  private achInfo: AchInfo;
  private paymentResponse: PaymentResponse;

  constructor(private http: HttpClient,
    private common: Common) {
  }

  getAchInfoOnFile(borrowerPk: string) {
    let cr = [{ key: 'borrowerPk', val: borrowerPk }];
    return this.http.get(`${this.baseUrl}/rest/loandata/getBankDataOnFile`, cr);
  }

  makeCreditCardPayment() {
    return this.http.post(`${this.baseUrl}/rest/payment/makeccpayment`, this.creditCardInfo, null);
  }

  makeAchPayment() {
    return this.http.post(`${this.baseUrl}/rest/payment/makeachpayment`, this.achInfo, null);
  }

  getPaymentResponse() {
    return this.paymentResponse;
  }

  setPaymentResponse(newPaymentResponse: PaymentResponse) {
    this.paymentResponse = newPaymentResponse;
  }

  getAchInfo() {
    return this.achInfo;
  }

  getccInfo() {
    return this.creditCardInfo;
  }

  setAchInfo(achInfo: AchInfo) {
    this.achInfo = achInfo;
  }

  setccInfo(creditCardInfo: CreditCardInfo) {
    this.creditCardInfo = creditCardInfo;
  }

  submitAchInfo() {
    this.achInfoSubmitted = true;
    this.ccInfoSubmitted = false;
  }

  submitccInfo() {
    this.ccInfoSubmitted = true;
    this.achInfoSubmitted = false;
  }

  isccInfoSubmitted() {
    return this.ccInfoSubmitted;
  }
  isAchPaymentSubmitted() {
    return this.achInfoSubmitted;
  }

}

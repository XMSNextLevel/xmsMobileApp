import { Injectable } from '@angular/core';
import { HttpClient } from '../http-client';
import { HttpHelper } from '../http-helpers';
import { LoanProvider, LoanInfo } from '../loan/loan';
import { Common } from '../common';
import 'rxjs/add/operator/map';




@Injectable()
export class DocumentDisplayProvider {

  private baseUrl: string = this.common.getBaseUrl();
  private httpHelper: HttpHelper = new HttpHelper();

  constructor(private http: HttpClient,
    private common: Common) {
  }

  getDocument(docId: string) {
    let cr = [{ key: 'docId', val: docId }];
    return this.http.get(`${this.baseUrl}/rest/loandata/getLoanDocument`, cr);
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '../http-client';
import { HttpHelper } from '../http-helpers';
import { LoanProvider, LoanInfo } from '../loan/loan';
import 'rxjs/add/operator/map';

export class Statement {
  docName: string;
  docCreatedDate: string;
  docId: string;
}

export class Document {
  base64EncodedDocument: string;
  documentType: string;
}

@Injectable()
export class StatementProvider {

  private baseUrl: string = 'http://app-m.objectbrains.com:7070/mobile-api';
  private httpHelper: HttpHelper = new HttpHelper();
  private statement: Statement;
  private document: Document;

  constructor(public http: HttpClient) {
  }

  getStatements(loanPk: String) {
    let cr = [{ key: 'loanPk', val: loanPk }];
    return this.http.get(`${this.baseUrl}/rest/loandata/getStatementList`, cr);
  }

  setStatement(st: Statement) {
    this.statement = st;
  }

  getStatement() {
    return this.statement;
  }

  setDocument(doc: Document) {
    this.document = doc;
  }

  getDocument() {
    return this.document;
  }
}

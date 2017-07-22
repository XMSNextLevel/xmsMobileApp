import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { StatementProvider, Statement, Document } from '../../providers/statement/statement'
import { LoanProvider } from '../../providers/loan/loan'
import { DocumentDisplayProvider } from '../../providers/document-display/document-display'
import { DocumentDisplayPage } from '../document-display/document-display'


/**
 * Generated class for the TransactionHistoryPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-statement',
  templateUrl: 'statement.html',
})
export class StatementPage {


  public statementArray: Array<Statement>;

  public docId: string;
  public document: Document;

  constructor(public navCtrl: NavController, public navParams: NavParams, public statementProvider: StatementProvider, public loanProvider: LoanProvider, public documentDisplayProvider: DocumentDisplayProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StatementPage');
    this.statementProvider.getStatements(this.loanProvider.getLoanInfo().loanPk)
      .then(
      (res) => {
        //this.statement =
        this.statementArray = res.json();
      })
      .catch((err) => { 'Could not get list of statements' });

  }

  itemSelected(statement: Statement) {
    this.statementProvider.setStatement(statement);
    this.docId = statement.docId;
    console.log("Document ID: ", this.docId);
    this.documentDisplayProvider.getDocument(this.docId)
      .then(
      (res) => {
        console.log("RESPONSE BODY", res.json());
        this.document = res.json();
        this.statementProvider.setDocument(this.document);
        console.log("#########: ", this.statementProvider.getDocument().base64EncodedDocument)
        this.navCtrl.push(DocumentDisplayPage);

      })
      .catch((err) => { 'Could not get list of statements' });



  }
}

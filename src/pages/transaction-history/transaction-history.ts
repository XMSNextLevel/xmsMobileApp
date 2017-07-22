import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TransactionHistoryProvider, TransactionHistory } from '../../providers/transaction-history/transaction-history'
import { LoanProvider } from '../../providers/loan/loan'
import { Common } from '../../providers/common'


/**
 * Generated class for the TransactionHistoryPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-transaction-history',
  templateUrl: 'transaction-history.html',
})
export class TransactionHistoryPage {

  public transactionHistory: TransactionHistory = {
    transactionDate: '',
    applyDate: '',
    totalAmount: ''
  }

  public transactionHistoryArray: Array<TransactionHistory>;

  constructor(public navCtrl: NavController, public navParams: NavParams, public transactionProvider: TransactionHistoryProvider, public loanProvider: LoanProvider, public common: Common) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TransactionHistoryPage');
    var th: TransactionHistory
    this.transactionProvider.getTransactionHistory(this.loanProvider.getLoanInfo().loanPk)
      .then(
      (res) => {
        this.transactionHistoryArray = res.json();
        for (let transactionHistoryArray of this.transactionHistoryArray) {
            transactionHistoryArray.totalAmount = this.common.formatNumberAmounts(transactionHistoryArray.totalAmount);
        }
      })
      .catch((err) => { 'Could not get transaction history' });

  }
  itemSelected(item: string) {
    console.log("Selected Item", item);
  }

}

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { BorrowerProvider } from '../../providers/borrower/borrower';
import { LoginPage } from '../login/login'
import { LoanProvider, LoanInfo } from '../../providers/loan/loan';
import { PaymentPage} from '../payment/payment'
import { AchPage } from '../ach/ach'
import { TransactionHistoryPage } from '../transaction-history/transaction-history'
import { PaymentSchedulePage } from '../payment-schedule/payment-schedule'
import { StatementPage } from '../statement/statement'
import { Common } from '../../providers/common'
import { Push, PushObject, PushOptions } from '@ionic-native/push';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public loanInfo: LoanInfo;

  rootPage: any = LoginPage;

  formattedAmountDue: string;
  formattedPrincipal: string;


  constructor(private navController: NavController,
    private borrowerProvider: BorrowerProvider,
    private loanProvider: LoanProvider,
    private navParams: NavParams,
    private common: Common,
    private loadingController: LoadingController) {
    console.log(this.navController.id);
  }

  ionViewCanEnter() {
    console.log("is logged in", this.borrowerProvider.getIsLogin());
    if (!this.borrowerProvider.getIsLogin())
      this.navController.setRoot(LoginPage)
  }

  ionViewDidLoad() {
    document.querySelector('.tabbar').setAttribute('style', 'display:flex');
    let loader = this.loadingController.create({
      content: 'Retrieving account info...',
    });

    loader.present().then(() => {

      if (this.borrowerProvider.getIsLogin())
        this.loanProvider.getBasicInfo().then((response) => {
          this.loanInfo = response.json();
          this.loanProvider.setLoanInfo(this.loanInfo);
          this.loanProvider.getLoanInfo().nextPaymentAmount = this.common.formatNumberAmounts(this.loanProvider.getLoanInfo().nextPaymentAmount);
          this.loanProvider.getLoanInfo().principalBalance = this.common.formatNumberAmounts(this.loanProvider.getLoanInfo().principalBalance);
        }).catch((error) => {
          alert(error)
        })
      loader.dismiss();
    });

  }

  goToPaymentPage() {
    this.navController.push(PaymentPage, { loanPk: this.loanInfo.loanPk })
  }

  goToTransactionHistoryPage() {
    this.navController.push(TransactionHistoryPage, { loanPk: this.loanInfo.loanPk, borrowerPk: this.loanInfo.borrowerPk })
  }

  goToPaymentSchedulePage() {
    this.navController.push(PaymentSchedulePage, { loanPk: this.loanInfo.loanPk, borrowerPk: this.loanInfo.borrowerPk })
  }

  goToStatementPage() {
    this.navController.push(StatementPage)
  }
}

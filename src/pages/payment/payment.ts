import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CCInfoPage } from '../ccInfo/ccInfo';
import { AchPage } from '../ach/ach';
import { LoanProvider, LoanInfo} from '../../providers/loan/loan';
import { BorrowerProvider } from '../../providers/borrower/borrower';
import { PaymentProvider, CreditCardInfo, AchInfo  } from '../../providers/payment/payment';
import { HomePage } from '../home/home';
import { PaymentReviewPage } from '../payment-review/payment-review'

/**
 * Generated class for the PaymentPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-payment',
  templateUrl: 'payment.html',
})
export class PaymentPage {

  public feeAmount: string = '0';
  public paymentDate: string;
  public paymentAmount: string;
  private achInfo: AchInfo;
  public loanInfo: LoanInfo;
  public paymentType: String;
  public todaysDate : Date;
  public todaysDateArray: Array<string>;
  public dayOfWeek: string;
  public todaysDateFormatted: string;
  public month: string;
  public dayOfMonth: string;
  public year : string;


  constructor(private navCtrl: NavController,
    private navParams: NavParams,
    private paymentProvider: PaymentProvider,
    private loanProvider: LoanProvider,
    private borrowerProvider: BorrowerProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PaymentPage');
  }

  goToCCInfoPage() {
    this.navCtrl.push(CCInfoPage);
  }

  goToNewACHPage() {
    this.navCtrl.push(AchPage);
  }

  changed() {
    if (this.paymentType === "newCreditCard") {
      this.navCtrl.push(CCInfoPage);
    } else if (this.paymentType === "newACH") {
      this.navCtrl.push(AchPage);
    }
  }

  makePayment() {
    if (this.paymentProvider.isccInfoSubmitted()) {
    //   this.paymentProvider.getccInfo().feeAmount = this.feeAmount;
    //   this.todaysDate = new Date();
    //   this.paymentProvider.getccInfo().paymentDate = this.todaysDate.getMonth().toString() + '/' + this.todaysDate.getDate().toString() + '/' + this.todaysDate.getFullYear().toString();
    //   this.paymentProvider.getccInfo().paymentAmount = this.paymentAmount;
      this.navCtrl.push(PaymentReviewPage);
    }
    else if (this.paymentProvider.isAchPaymentSubmitted()) {
    //   this.todaysDate = new Date();
    //   this.paymentProvider.getAchInfo().postingDate = this.todaysDate.getMonth().toString() + '/' + this.todaysDate.getDate().toString() + '/' + this.todaysDate.getFullYear().toString();;
    //   this.paymentProvider.getAchInfo().paymentAmount = this.paymentAmount;
      this.navCtrl.push(PaymentReviewPage);
    }
    else {
      alert("Payment Information not submitted");
    }
  }




}

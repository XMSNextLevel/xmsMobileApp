import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PaymentProvider, CreditCardInfo } from '../../providers/payment/payment';
import { LoanProvider, LoanInfo } from '../../providers/loan/loan';
import { BorrowerProvider } from '../../providers/borrower/borrower';
import { HomePage } from '../home/home';
import { PaymentReviewPage } from '../payment-review/payment-review'



/**
 * Generated class for the ccInfo page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-ccInfo',
  templateUrl: 'ccInfo.html',
})
export class CCInfoPage {

  public creditCardInfo: CreditCardInfo = {
    ccFirstName: '',
    ccLastName: '',
    loanPk: '',
    address: '',
    city: '',
    state: '',
    zip: '',
    ccExpDate: '',
    ccNumber: '',
    ccType: '',
    ccVV: '',
    paymentDate: '',
    paymentAmount: '',
    feeAmount: '0'
  }

  public loanInfo: LoanInfo = {
    loanPk: '',
    borrowerPk: '',
    principalBalance: '',
    nextDueDate: '',
    nextPaymentAmount: ''
  };

  public states: string[] = [
    'Alabama',
    'Alaska',
    'Arizona',
    'Arkansas',
    'California',
    'Colorado',
    'Connecticut',
    'Delaware',
    'Florida',
    'Georgia',
    'Hawaii',
    'Idaho',
    'Illinois',
    'Indiana',
    'Iowa',
    'Kansas',
    'Kentucky',
    'Louisiana',
    'Maine',
    'Maryland',
    'Massachusetts',
    'Michigan',
    'Minnesota',
    'Mississippi',
    'Missouri',
    'Montana',
    'Nebraska',
    'Nevada',
    'New Hampshire',
    'New Jersey',
    'New Mexico',
    'New York',
    'North Carolina',
    'North Dakota',
    'Ohio',
    'Oklahoma',
    'Oregon',
    'Pennsylvania',
    'Rhode Island',
    'South Carolina',
    'South Dakota',
    'Tennessee',
    'Texas',
    'Utah',
    'Vermont',
    'Virginia',
    'Washington',
    'West Virginia',
    'Wisconsin',
    'Wyoming',
    'District of Columbia',
    'Puerto Rico',
    'Guam',
    'American Samoa',
    'U.S. Virgin Islands',
    'Northern Mariana Islands'];

  public todaysDate: Date;
  public todaysDateArray: Array<string>;
  public dayOfWeek: string;
  public todaysDateFormatted: string;
  public month: string;
  public dayOfMonth: string;
  public year: string;
  public amountDue: string;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private paymentProvider: PaymentProvider,
    private loanProvider: LoanProvider,
    private borrowerProvider: BorrowerProvider) {
    if (this.paymentProvider.getccInfo() != null) {
      this.creditCardInfo = this.paymentProvider.getccInfo();
    }
    this.todaysDateArray = new Date().toString().split(' ');
    this.dayOfWeek = this.todaysDateArray[0];
    this.month = this.todaysDateArray[1];
    this.dayOfMonth = this.todaysDateArray[2];
    this.year = this.todaysDateArray[3];
    this.todaysDateFormatted = this.dayOfWeek + ' ' + this.month + ' ' + this.dayOfMonth + ' ' + this.year;
    this.amountDue = "$" + this.loanProvider.getLoanInfo().nextPaymentAmount;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PaymentPage');

  }

  submitCCInfo() {
    this.todaysDate = new Date();
    this.creditCardInfo.paymentDate = this.todaysDate.getMonth().toString() + '/' + this.todaysDate.getDate().toString() + '/' + this.todaysDate.getFullYear().toString();
    this.creditCardInfo.loanPk = this.loanProvider.getLoanInfo().loanPk;
    this.paymentProvider.setccInfo(this.creditCardInfo);
    this.paymentProvider.submitccInfo();
    console.log(this.creditCardInfo);
    this.navCtrl.push(PaymentReviewPage);
  }

  cancelCCInfo() {
    this.navCtrl.pop();
  }

}

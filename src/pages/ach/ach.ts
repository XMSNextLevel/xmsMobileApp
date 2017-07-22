import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PaymentProvider, AchInfo } from '../../providers/payment/payment';
import { LoanProvider, LoanInfo } from '../../providers/loan/loan';
import { HomePage } from '../home/home';
import { PaymentPage} from '../payment/payment'
import { PaymentReviewPage } from '../payment-review/payment-review'


/**
 * Generated class for the AchPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-ach',
  templateUrl: 'ach.html',
})
export class AchPage {

  isChecked: boolean = true;

  private achInfo: AchInfo = {
    loanPk: '',
    borrowerPk: '',
    name: '',
    sendPaymentReminder: '',
    useBankDataOnFile: '',
    bankName: '',
    accountType: '',
    accountNumber: '',
    routingNumber: '',
    businessAccount: '',
    paymentAmount: '',
    postingDate: '',
    isDataAvailable: ''
  };

  private achInfoOnFile: AchInfo = {
    loanPk: '',
    borrowerPk: '',
    name: '',
    sendPaymentReminder: '',
    useBankDataOnFile: '',
    bankName: '',
    accountType: '',
    accountNumber: '',
    routingNumber: '',
    businessAccount: '',
    paymentAmount: '',
    postingDate: '',
    isDataAvailable: ''
  };

  public loanInfo: LoanInfo = {
    loanPk: '',
    borrowerPk: '',
    principalBalance: '',
    nextDueDate: '',
    nextPaymentAmount: ''
  };

  public todaysDate: Date;
  public todaysDateArray: Array<string>;
  public dayOfWeek: string;
  public todaysDateFormatted: string;
  public month: string;
  public dayOfMonth: string;
  public year: string;
  public amountDue: string;
  public accountHolderName: string;
  public bankName: string;
  public accountType: string;
  public accountNumber: string;
  public routingNumber: string;
  public isDataAvailable: boolean = true;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private paymentProvider: PaymentProvider,
    private loanProvider: LoanProvider) {
    if (this.paymentProvider.getAchInfo() != null) {
      this.achInfo = this.paymentProvider.getAchInfo();
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
      this.paymentProvider.getAchInfoOnFile(this.loanProvider.getLoanInfo().borrowerPk).then((response) => {
          this.achInfoOnFile = response.json();
          if(this.achInfoOnFile.isDataAvailable){
              this.accountHolderName = this.achInfoOnFile.name;
              this.bankName = this.achInfoOnFile.bankName;
              this.accountType = this.achInfoOnFile.accountType;
              this.accountNumber = this.achInfoOnFile.accountNumber;
              this.routingNumber = this.achInfoOnFile.routingNumber;
          }
          else{
              this.isDataAvailable = false;
          }
    }).catch((error) => { alert("Error loading Ach Information")});
  }

  achInformationSubmitted() {
    // this.todaysDate = new Date();
    // this.achInfo.postingDate = this.todaysDate.getMonth().toString() + '/' + this.todaysDate.getDate().toString() + '/' + this.todaysDate.getFullYear().toString();
    // this.achInfo.loanPk = this.loanProvider.getLoanInfo().loanPk;
    // this.achInfo.borrowerPk = this.loanProvider.getLoanInfo().borrowerPk;
    this.todaysDate = new Date();
    if (this.isChecked) {
      this.achInfoOnFile.loanPk = this.loanProvider.getLoanInfo().loanPk;
      this.achInfoOnFile.borrowerPk = this.loanProvider.getLoanInfo().borrowerPk;
      this.achInfoOnFile.useBankDataOnFile = "true";
      this.achInfoOnFile.paymentAmount = this.achInfo.paymentAmount;
      this.achInfoOnFile.postingDate = this.todaysDate.getMonth().toString() + '/' + this.todaysDate.getDate().toString() + '/' + this.todaysDate.getFullYear().toString();
      this.paymentProvider.setAchInfo(this.achInfoOnFile);
    } else {
        this.todaysDate = new Date();
        this.achInfo.postingDate = this.todaysDate.getMonth().toString() + '/' + this.todaysDate.getDate().toString() + '/' + this.todaysDate.getFullYear().toString();
        this.achInfo.loanPk = this.loanProvider.getLoanInfo().loanPk;
        this.achInfo.borrowerPk = this.loanProvider.getLoanInfo().borrowerPk;
      this.achInfo.useBankDataOnFile = "false";
      this.paymentProvider.setAchInfo(this.achInfo);
    }

    this.paymentProvider.submitAchInfo();
    console.log(this.achInfo);
    this.navCtrl.push(PaymentReviewPage);
  }

  cancelAchInfo() {
    this.navCtrl.pop();
  }
}

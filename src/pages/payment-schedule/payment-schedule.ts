import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PaymentScheduleProvider, PaymentSchedule } from '../../providers/payment-schedule/payment-schedule'
import { LoanProvider } from '../../providers/loan/loan'
import { Common } from '../../providers/common'


/**
 * Generated class for the ThankYouPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-payment-schedule',
  templateUrl: 'payment-schedule.html',
})
export class PaymentSchedulePage {

  public paymentSchedule: PaymentSchedule = {
    dueAmount: '',
    dueDate: ''
  }

  public paymentScheduleArray: Array<PaymentSchedule>;

  constructor(public navCtrl: NavController, public navParams: NavParams, public paymentScheduleProvider: PaymentScheduleProvider, public loanProvider: LoanProvider, public common : Common) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PaymentSchedulePage');
    var ps: PaymentSchedule
    this.paymentScheduleProvider.getPaymentSchedule(this.loanProvider.getLoanInfo().loanPk)
      .then(
      (res) => {
        this.paymentScheduleArray = res.json();
        for (let paymentSchedule of this.paymentScheduleArray) {
            paymentSchedule.dueAmount = this.common.formatNumberAmounts(paymentSchedule.dueAmount);
        }
      })
      .catch((err) => { 'Could not get payment schedule' });
  }
  itemSelected(item: string) {
    console.log("Selected Item", item);
  }

}

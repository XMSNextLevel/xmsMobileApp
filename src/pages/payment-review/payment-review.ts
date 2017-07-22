import { Component } from '@angular/core';
import { PaymentProvider, CreditCardInfo, AchInfo, PaymentResponse} from '../../providers/payment/payment';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { ThankYouPage } from '../thank-you/thank-you'
import { CCInfoPage } from '../ccInfo/ccInfo';
import { AchPage } from '../ach/ach';

/**
 * Generated class for the PaymentReviewPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-payment-review',
  templateUrl: 'payment-review.html',
})
export class PaymentReviewPage {

  public creditCardInfo: CreditCardInfo;
  public achInfo: AchInfo;
  public paymentAmount: string;
  public paymentDate: string;
  public achAccountOrLast4CCNumber: string;
  public creditCardOrAchNumberTitle: string;
  public achLength: number;
  public paymentResponse: PaymentResponse = {
    paymentResponse: ''
  }

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public paymentProvider: PaymentProvider,
    public loadingController: LoadingController) {
    if (this.paymentProvider.isccInfoSubmitted()) {
      console.log("llllllll");
      this.paymentAmount = this.paymentProvider.getccInfo().paymentAmount;
      this.paymentDate = this.paymentProvider.getccInfo().paymentDate;
      this.achAccountOrLast4CCNumber = this.paymentProvider.getccInfo().ccNumber.substring(12, 16);
      this.creditCardOrAchNumberTitle = "Last 4 Digits of CC#:";
    }
    else if (this.paymentProvider.isAchPaymentSubmitted()) {
      console.log("mmmmmmmmmm");
      this.paymentAmount = this.paymentProvider.getAchInfo().paymentAmount;
      this.paymentDate = this.paymentProvider.getAchInfo().postingDate;
      this.achLength = this.paymentProvider.getAchInfo().accountNumber.length;
      if (this.achLength >= 5) {
        this.achAccountOrLast4CCNumber = this.paymentProvider.getAchInfo().accountNumber.substring(this.achLength - 4, this.achLength);
      }
      else {
        this.achAccountOrLast4CCNumber = this.paymentProvider.getAchInfo().accountNumber;
      }
      this.creditCardOrAchNumberTitle = "Last 4 Digits of Ach#:";
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PaymentReviewPage');
  }

  confirmPayment() {
    if (this.paymentProvider.isccInfoSubmitted()) {
      this.makeCreditCardPayment();
    } else if (this.paymentProvider.isAchPaymentSubmitted()) {
      this.makeAchPayment();
    }

  }

  makeCreditCardPayment() {
    let loader = this.loadingController.create({
      content: 'Making Payment...',
    });

    loader.present().then(() => {
      this.paymentProvider.makeCreditCardPayment().then((response) => {
        this.paymentResponse.paymentResponse = response.text();
        console.log("CC Payment Response: ", this.paymentResponse.paymentResponse);
        this.paymentProvider.setPaymentResponse(this.paymentResponse);
        this.navCtrl.setRoot(ThankYouPage);
      }).catch((error) => { alert('Error making payment.'); this.navCtrl.push(CCInfoPage) });

      loader.dismiss();
    });
  }

  makeAchPayment() {
    let loader = this.loadingController.create({
      content: 'Making Payment...',
    });

    loader.present().then(() => {
      this.paymentProvider.makeAchPayment().then((response) => {
        this.paymentResponse.paymentResponse = response.text();
        console.log("Ach Payment Response: ", this.paymentResponse.paymentResponse);
        this.paymentProvider.setPaymentResponse(this.paymentResponse);
        this.navCtrl.setRoot(ThankYouPage);
      }).catch((error) => { alert("Error making payment."); this.navCtrl.push(AchPage) });

      loader.dismiss();
    });
  }

}

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { PaymentProvider, CreditCardInfo, AchInfo, PaymentResponse} from '../../providers/payment/payment';


/**
 * Generated class for the ThankYouPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-thank-you',
  templateUrl: 'thank-you.html',
})
export class ThankYouPage {

  public displayText: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public paymentProvider: PaymentProvider) {
      alert('Payment Success');
      this.displayText = this.paymentProvider.getPaymentResponse().paymentResponse;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ThankYouPage');
  }

  goHome() {
    this.navCtrl.setRoot(HomePage);
  }
}

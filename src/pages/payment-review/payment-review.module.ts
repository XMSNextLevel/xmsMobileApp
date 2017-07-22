import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PaymentReviewPage } from './payment-review';

@NgModule({
  declarations: [
    PaymentReviewPage,
  ],
  imports: [
    IonicPageModule.forChild(PaymentReviewPage),
  ],
  exports: [
    PaymentReviewPage
  ]
})
export class PaymentReviewPageModule {}

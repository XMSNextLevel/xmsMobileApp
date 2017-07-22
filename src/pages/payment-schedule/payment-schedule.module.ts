import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PaymentSchedulePage } from './payment-schedule';

@NgModule({
  declarations: [
    PaymentSchedulePage,
  ],
  imports: [
    IonicPageModule.forChild(PaymentSchedulePage),
  ],
  exports: [
    PaymentSchedulePage
  ]
})
export class PaymentSchedulePageModule { }

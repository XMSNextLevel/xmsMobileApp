import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler, NavController } from 'ionic-angular';
import { IonicStorageModule, Storage } from '@ionic/storage';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { LoginPage } from '../pages/login/login';
import { PaymentPage} from '../pages/payment/payment';
import { CCInfoPage } from '../pages/ccInfo/ccInfo';
import { AchPage } from '../pages/ach/ach';
import { TransactionHistoryPage } from '../pages/transaction-history/transaction-history'
import { PaymentSchedulePage } from '../pages/payment-schedule/payment-schedule'
import { PaymentReviewPage } from '../pages/payment-review/payment-review'
import { ThankYouPage } from '../pages/thank-you/thank-you'
import { StatementPage } from '../pages/statement/statement'
import { DocumentDisplayPage } from '../pages/document-display/document-display'

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { LoginProvider } from '../providers/login/login';
import { HttpModule } from '@angular/http';
import { HttpClient } from '../providers/http-client';
import { HttpHelper } from '../providers/http-helpers';
import { Common } from '../providers/common';
import { BorrowerProvider } from '../providers/borrower/borrower';
import { LoanProvider } from '../providers/loan/loan';
import { PaymentProvider } from '../providers/payment/payment';
import { PaymentScheduleProvider } from '../providers/payment-schedule/payment-schedule';
import { TransactionHistoryProvider } from '../providers/transaction-history/transaction-history';
import { StatementProvider } from '../providers/statement/statement';
import { DocumentDisplayProvider } from '../providers/document-display/document-display';
import { PdfViewerComponent } from 'ng2-pdf-viewer'


@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    LoginPage,
    PaymentPage,
    CCInfoPage,
    AchPage,
    TransactionHistoryPage,
    PaymentSchedulePage,
    PaymentReviewPage,
    ThankYouPage,
    StatementPage,
    DocumentDisplayPage,
    PdfViewerComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    PaymentPage,
    LoginPage,
    CCInfoPage,
    AchPage,
    TransactionHistoryPage,
    PaymentSchedulePage,
    PaymentReviewPage,
    ThankYouPage,
    StatementPage,
    DocumentDisplayPage,
    PdfViewerComponent
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    LoginProvider,
    HttpClient,
    HttpHelper,
    Common,
    BorrowerProvider,
    LoanProvider,
    PaymentProvider,
    TransactionHistoryProvider,
    PaymentScheduleProvider,
    StatementProvider,
    DocumentDisplayProvider,
    IonicStorageModule
  ]
})
export class AppModule { }

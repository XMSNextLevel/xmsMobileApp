import { Component, ViewChild } from '@angular/core';
import { NavController, Tabs, ActionSheetController, App } from 'ionic-angular';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { LoginPage } from '../login/login';
import { BorrowerProvider } from '../../providers/borrower/borrower';


@Component({
  templateUrl: 'tabs.html'
})


export class TabsPage {

  tab1Root = HomePage;
  tab2Root = AboutPage;
  tab3Root = ContactPage;

  constructor(public navCtrl: NavController,
    public actionSheetCtrl: ActionSheetController, public borrowerProvider: BorrowerProvider, public app: App) {

  }

  ionViewDidLoad() {

    this.navCtrl.viewDidEnter.subscribe((view) => {
      console.log(view.instance.constructor.name);
    });
  }

  presentActionSheet() {
    console.log("hello world");
    let actionSheet = this.actionSheetCtrl.create({
      title: 'Services Menu',
      buttons: [
        {
          text: 'Edit Personal Info.',
          role: 'destructive',
          handler: () => {
            console.log('Destructive clicked');
          }
        },
        {
          text: 'Log Out',
          handler: () => {
            this.borrowerProvider.setIsLogin(false);
            this.borrowerProvider.setToken("");
            this.navCtrl.setRoot(LoginPage);
            console.log('LogOut clicked');
          }
        },
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });

    actionSheet.present();
  }

  logout(){
      this.borrowerProvider.setIsLogin(false);
      this.borrowerProvider.setToken("");
      this.app.getRootNav().setRoot(TabsPage);
    //   this.navCtrl.setRoot(LoginPage);
    //   this.navCtrl.setRoot(TabsPage);
      console.log('LogOut clicked');
  }

}

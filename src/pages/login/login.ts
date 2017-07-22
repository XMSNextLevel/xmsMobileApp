import { Component, ViewChild, ElementRef, Renderer2 } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, Tabs } from 'ionic-angular';
import { IonicStorageModule, Storage } from '@ionic/storage';
import { HomePage } from '../home/home';
import { DOCUMENT } from '@angular/platform-browser';

import { BorrowerProvider } from '../../providers/borrower/borrower';
import { LoginProvider } from '../../providers/login/login';

/**
 * Generated class for the LoginPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})

export class LoginPage {
  // public usr: string = 'a';
  // public pwd: string = 'p';
  public usr: string;
  public pwd: string;
  isChecked: boolean = false;

  constructor(private login: LoginProvider,
    private borrowerProvider: BorrowerProvider,
    public navCtrl: NavController,
    public storage: Storage,
    public loadingController: LoadingController) {
    this.storage.get('username').then((val) => {
      if (val === '') {
        this.isChecked = false;
      }
      else {
        this.isChecked = true;
      }

    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
    document.querySelector('.tabbar').setAttribute('style', 'display:none');

    this.storage.get('username').then((val) => {
      this.usr = val;
    });

  }

  userLogin() {
    let loader = this.loadingController.create({
      content: 'Logging in...',
    });

    loader.present().then(() => {
      this.login.login(this.usr, this.pwd).then((res) => {
        this.borrowerProvider.setUserInfo(res.text(), this.usr);
        this.navCtrl.setRoot(HomePage);
      }).catch((err) => {
        alert('Invalid Username or Password');
      });
      loader.dismiss();
    });



    if (this.isChecked) {
      this.storage.set('username', this.usr);
    }
    else {
      this.storage.set('username', '');
    }

  }

}

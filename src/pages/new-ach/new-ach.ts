import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the NewAchPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-new-ach',
  templateUrl: 'new-ach.html',
})
export class NewAchPage {

  constructor(public navCtrl: NavController,
    public navParams: NavParams) {


  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NewAchPage');
  }

}

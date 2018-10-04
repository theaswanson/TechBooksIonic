import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {HomePage} from '../home/home';
/**
 * Generated class for the IntroSlidesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-intro-slides',
  templateUrl: 'intro-slides.html',
})
export class IntroSlidesPage {
  skipMsg: string = "Skip";
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  skip(){
    this.navCtrl.push(HomePage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad IntroSlidesPage');
  }

}

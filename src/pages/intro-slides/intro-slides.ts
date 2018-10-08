import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {HomePage} from '../home/home';
import { Slides } from 'ionic-angular';

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
  @ViewChild(Slides) slides: Slides;
  skipMsg: string = "Skip";

  constructor(public navCtrl: NavController) {

  }

  skip() {
    this.navCtrl.push(HomePage);
  }

  slideChanged() {
    if (this.slides.isEnd())
      this.skipMsg = "Alright, I got it";
  }

}
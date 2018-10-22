import { MyApp } from './../../app/app.component';
import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {HomePage} from '../home/home';
import { Slides } from 'ionic-angular';
import { Storage } from '@ionic/storage';

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


  constructor(public nav: NavController, private storage: Storage) {

  }

  skip() {
    this.nav.setRoot(HomePage);
  }

  slideChanged() {
    if (this.slides.isEnd())
      this.skipMsg = "Alright, I got it";
    else
      this.skipMsg = "Skip";
  }

  

}
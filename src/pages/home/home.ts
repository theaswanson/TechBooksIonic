import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http } from '@angular/http';
import { CardsPage } from '../cards/cards';
import { EasterEggPage } from '../easter-egg/easter-egg';
import { Keyboard } from '@ionic-native/keyboard';
import { ModalController } from 'ionic-angular';
import 'rxjs/add/operator/map';
import { BookLogicProvider } from '../../providers/book-logic/book-logic';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [BookLogicProvider]
})
export class HomePage {


  logoTaps:number;

  constructor(public logic:BookLogicProvider, public navCtrl: NavController, public http: Http, private keyboard: Keyboard, public modalCtrl : ModalController) {
 
    this.logoTaps = 0;
  }

  openCards(id: string) {
    this.navCtrl.push(CardsPage, {
      bookId: id,
    })
  }


  logoTap(e)
  {
    this.logoTaps++;

    if (this.logoTaps == 3)
    {
      this.logoTaps = 0;
      this.openModal();
    }
  }

  openModal() { 
    var modalPage = this.modalCtrl.create(EasterEggPage); 
    modalPage.present(); 
  }


}

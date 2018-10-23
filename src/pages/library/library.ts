import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import * as firebase from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable } from 'rxjs/Observable';

@IonicPage()
@Component({
  selector: 'page-library',
  templateUrl: 'library.html',
})
export class LibraryPage {

  user:any

  constructor(private afAuth: AngularFireAuth, public navCtrl: NavController, public navParams: NavParams) {
    this.afAuth.authState.subscribe(user => {
      this.user = user
    })

  }

  ionViewDidLoad() {
  }
}

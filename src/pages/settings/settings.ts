import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import * as firebase from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable } from 'rxjs/Observable';
import { GooglePlus } from '@ionic-native/google-plus';
import { LoginPage } from '../login/login';

@IonicPage()
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})

export class SettingsPage {

  user:any;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private afAuth: AngularFireAuth) {
    this.afAuth.authState.subscribe(user => {
      this.user = user
    })
  }

  ionViewDidLoad() {
  }

  signOut(): Promise<void> {
    return this.afAuth.auth.signOut().then(
      () => {
        this.navCtrl.parent.parent.setRoot(LoginPage)
      }
    )
  }
}

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import * as firebase from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs/Observable';

import { GooglePlus } from '@ionic-native/google-plus';
import { Platform } from 'ionic-angular';
import { TabsPage } from '../../pages/tabs/tabs'
import { LoginPage } from '../../pages/login/login'
import { firebaseConfig } from '../../config'


@Component({
  selector: 'google-login',
  templateUrl: 'google-login.html'
})
export class GoogleLoginComponent {

  user: any;

  constructor(
    private afAuth: AngularFireAuth,
    private afs: AngularFirestore,
    private gplus: GooglePlus,
    private platform: Platform,
    public navCtrl: NavController
  ) {
    this.user = this.afAuth.authState;
  }

  googleLogin() {
    if (this.platform.is("cordova")) {
      this.nativeGoogleLogin();
    } else {
      this.webGoogleLogin();
    }
  }

  async nativeGoogleLogin(): Promise<any> {
    try {
      const gplusUser = await this.gplus.login({
        'webClientId': firebaseConfig.ice.webClientId,
        'offline': true,
        'scopes': 'profile email'
      })
      return await this.afAuth.auth.signInWithCredential(
        firebase.auth.GoogleAuthProvider.credential(gplusUser.idToken)
      ).then(
        () => this.navCtrl.push(TabsPage)
      )
    } catch(err) {
      console.log(err)
    }
  }

  async webGoogleLogin(): Promise<any> {
    try {
      const provider = new firebase.auth.GoogleAuthProvider();
      const credentials = await this.afAuth.auth.signInWithPopup(provider)
        .then((credential) => {
          this.updateUser(credential.user)
          this.navCtrl.push(TabsPage)
        })
    } catch(err) {
      console.log(err)
    }
  }

  private updateUser(user) {
    const usersRef = this.afs.collection('users').doc(user.uid)

    usersRef.get()
      .subscribe((docSnapshot) => {
        if (docSnapshot.exists) {
        } else {
          usersRef.set({
            uid: user.uid,
            email: user.email,
            name: user.displayName
          })
        }
    });
  }
}

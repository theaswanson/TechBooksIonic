import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import * as firebase from 'firebase/app';
import { AngularFireAuth  } from '@angular/fire/auth';
import { Observable } from 'rxjs/Observable';
import { AngularFirestore } from '@angular/fire/firestore';

@IonicPage()
@Component({
  selector: 'page-library',
  templateUrl: 'library.html',
})
export class LibraryPage {

  user:any;
  books:any[];

  constructor(
    private afAuth: AngularFireAuth,
    public navCtrl: NavController,
    public navParams: NavParams,
    private afStore: AngularFirestore,
  ) {
    this.afAuth.authState.subscribe(user => {
      this.user = user;
      console.log(this.books)
    })
  }

  async getUserBooks(user): Promise<any> {
      this.books = []
    try {
      this.afStore.collection(`books`, ref => ref.where('userId', '==', user.uid)).get()
        .subscribe((snap) => {
          snap.docs.forEach(doc => {
            this.books.push(doc.data())
          })
        })
    } catch(err) {
      console.log(err)
    }
  }

  removeBook(book) {
    this.afStore.collection('books').doc(book.uid).delete()
      .then(
        () => this.getUserBooks(this.user)
      )
  }

  ionViewDidLoad() {
  }

  ionViewWillEnter() {
    this.getUserBooks(this.user);
  }
}

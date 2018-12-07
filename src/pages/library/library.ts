import { Component } from '@angular/core';
import { ActionSheetController, IonicPage, NavController, NavParams } from 'ionic-angular';
import * as firebase from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable } from 'rxjs/Observable';
import { AngularFirestore } from '@angular/fire/firestore';
import { InAppBrowser } from '@ionic-native/in-app-browser';

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
    private iab: InAppBrowser,
    private actionSheetCtrl: ActionSheetController
  ) {
    this.books = [];
    this.afAuth.authState.subscribe(user => {
      this.user = user;
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

  showActionSheet(book) {
    const actionSheet = this.actionSheetCtrl.create({
      title: 'Actions for ' + book.title,
      buttons: [
        {
          text: 'Remove',
          role: 'destructive',
          handler: () => {
            this.removeBook(book);
          }
        },{
          text: 'Go to link',
          handler: () => {
            this.goToLink(book)
          }
        },{
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    actionSheet.present();
  }

  removeBook(book) {
    this.afStore.collection('books').doc(book.uid).delete()
      .then(
        () => this.getUserBooks(this.user)
      )
  }

  goToLink(book) {
    const browser = this.iab.create(book.storeLink)
    browser.show();
  }

  ionViewDidLoad() {
  }

  ionViewWillEnter() {
    this.getUserBooks(this.user);
  }
}

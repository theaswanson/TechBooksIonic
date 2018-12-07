import { Component } from '@angular/core';
import { ActionSheetController, NavController } from 'ionic-angular';
import { Http } from '@angular/http';
import { CardsPage } from '../cards/cards';
import { EasterEggPage } from '../easter-egg/easter-egg';
import { Keyboard } from '@ionic-native/keyboard';
import { ModalController } from 'ionic-angular';
import { BookLogicProvider } from '../../providers/book-logic/book-logic';
import { ToastController } from 'ionic-angular';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import 'rxjs/add/operator/map';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [BookLogicProvider]
})
export class HomePage {


  logoTaps:number;
  user: any;
  
  constructor(
     public bookLogic: BookLogicProvider,
     private actionSheetCtrl: ActionSheetController,
     public toastCtrl: ToastController,
     public navCtrl: NavController,
     public http: Http,
     private keyboard: Keyboard,
     public modalCtrl : ModalController,
     private afAuth: AngularFireAuth,
     private afStore: AngularFirestore
   ) {
    this.logoTaps = 0;

    this.afAuth.authState.subscribe(user => {
      this.user = user
    })
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

  showActionSheet(book) {
    const actionSheet = this.actionSheetCtrl.create({
      title: 'Actions for ' + book.title,
      buttons: [
        {
          text: 'Add to Library',
          handler: () => {
            this.addBook(book)
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

  addBook(book) {
    const books = this.afStore.collection(`books`, ref => ref.where('bookId', '==', book.id).where('userId', '==', this.user.uid)).get()
      .subscribe((docSnapshot) => {
        if (docSnapshot.docs.length > 0) {
        } else {
          this.addBookToUserLibrary(book, this.afStore.collection('books'))
        }
      })
  }

  addBookToUserLibrary(book, connection) {
    connection.add({
      userId: this.user.uid,
      bookId: book.id,
      title: book.volumeInfo.title,
      description: book.volumeInfo.description,
      thumbnail: book.volumeInfo.imageLinks.smallThumbnail,
      storeLink: book.accessInfo.webReaderLink,
      author: book.volumeInfo.authors[0],
      category: book.volumeInfo.categories[0],
    }).then(ref => {
      ref.update({uid: ref.id})
      const toast = this.toastCtrl.create({
        message: book.volumeInfo.title + " added to your library",
        duration: 2000,
        position: 'top'
      });

      toast.present();
    })
  }
}

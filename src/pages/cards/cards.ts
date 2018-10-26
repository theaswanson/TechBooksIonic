import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';
import { ToastController } from 'ionic-angular';
import * as firebase from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable } from 'rxjs/Observable';


import 'rxjs/add/operator/map';

@IonicPage()
@Component({
  selector: 'page-cards',
  templateUrl: 'cards.html',
})
export class CardsPage {

  results:any;
  books:any;
  bookId:any;
  noResults:any;
  loading:any;
  cardDirection = "xy";
  cardOverlay: any = {
    like: {
        backgroundColor: '#28e93b',
    },
    dislike: {
        backgroundColor: '#e92828'
    }
  };
  user:any;

  constructor(private afAuth: AngularFireAuth, public toastCtrl: ToastController, public navCtrl: NavController, public navParams: NavParams, public http: Http) {
    this.books = [];
    this.bookId = navParams.get('bookId')
    this.noResults = false;
    this.loading = true;

    this.afAuth.authState.subscribe(user => {
      this.user = user
    })
  }

  ionViewDidLoad() {
    console.log(this.user)
    this.http.get('https://www.googleapis.com/books/v1/volumes/' + this.bookId + '/associated').map(res => res.json()).subscribe(
      data => {

        this.results = data;
        this.books = [];
        for (var item in this.results.items) {
          if (this.results.items[item].volumeInfo.hasOwnProperty('imageLinks') && this.results.items[item].volumeInfo.hasOwnProperty('description')) {
            this.books.push(this.results.items[item]);
          }
        }

        if (this.books.length == 0) {
          this.noResults = true;
        }

        this.loading = false

        err => {
          console.log("Error in searchFunction.");
          alert("Error in searchFunction.");
        }
      })
  }

  OpenCardPage(book) {
    const toast = this.toastCtrl.create({
      message: "You clicked on " + book.volumeInfo.title,
      duration: 2000,
    });

    toast.present();
  }

  destroyEvent(book) {
    const toast = this.toastCtrl.create({
      message: "you disliked " + book.volumeInfo.title,
      duration: 2000,
    });

    toast.present();
  }

  likeEvent(book) {
    const toast = this.toastCtrl.create({
      message: "you liked " + book.volumeInfo.title,
      duration: 2000,
    });

    toast.present();
  }

  onCardInteract(event, book) {
    if (event.like == true) {
      this.likeEvent(book)
    }
    else {
      this.destroyEvent(book)
    }
  }
}

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';
import { ToastController } from 'ionic-angular';
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

  constructor(public toastCtrl: ToastController, public navCtrl: NavController, public navParams: NavParams, public http: Http) {
    this.books = [];
    this.bookId = navParams.get('bookId')
    this.noResults = false;
    this.loading = true;
  }

  ionViewDidLoad() {
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
    console.log()
    const toast = this.toastCtrl.create({
      message: "You clicked on " + book.volumeInfo.title,
      duration: 2000,
      position: 'bottom'
    });

    toast.present();
  }

  destroyEvent(book) {
    console.log()
    const toast = this.toastCtrl.create({
      message: "you disliked " + book.volumeInfo.title,
      duration: 2000,
      position: 'bottom'
    });

    toast.present();
  }

  likeEvent(book) {
    console.log()
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

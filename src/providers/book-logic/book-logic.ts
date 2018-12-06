import { Injectable } from '@angular/core';
import { NavController, ModalController, NavParams } from 'ionic-angular';
import { Keyboard } from '@ionic-native/keyboard';
import { Http } from '@angular/http';
import { map,catchError } from "rxjs/operators";
import { AngularFireAuth } from '@angular/fire/auth';


@Injectable()
export class BookLogicProvider {
  results:any;
  books:any;
  noResults:any;
  loading:any;
  bookId:any;
  user:any;

  constructor(public navCtrl: NavController, public http: Http, private keyboard: Keyboard, public modalCtrl : ModalController, private afAuth: AngularFireAuth, public navParams: NavParams) {
    this.books = [];
    this.noResults = false;
    this.loading = false;
    this.bookId = navParams.get('bookId');

    this.afAuth.authState.subscribe(user => {
      this.user = user
    })
  }

  openKeyboard() {
    this.keyboard.show();
  }

  closeKeyboard() {
    this.keyboard.hide();
  }

  searchFunction(q: string) {
    this.closeKeyboard();

    this.books = [];
    this.loading = true;
    this.noResults = false;

    if (q.replace(/\s/g, '').length == 0) {
      this.noResults = true
      this.loading = false
    } else {

      this.http.get('https://www.googleapis.com/books/v1/volumes?q=' + q.replace(/[^a-zA-Z1-9 ]/g, "")).pipe(map(res => res.json()))
        .subscribe(
          data => {

            this.results = data;

            for (var item in this.results.items) {
              if (this.results.items[item].volumeInfo.hasOwnProperty('imageLinks') 
              && this.results.items[item].volumeInfo.hasOwnProperty('description')
              && this.results.items[item].volumeInfo.hasOwnProperty('categories')) {
                this.books.push(this.results.items[item]);
              }
            }
            if (this.books.length == 0) {
              this.noResults = true;
            }

            this.loading = false;
            
            err => {
              console.log(err);
              alert("Error in searchFunction.");
            }
          })
    }
  }

  ionViewDidLoad() {
    this.http.get('https://www.googleapis.com/books/v1/volumes/' + this.bookId + '/associated').pipe(map(res => res.json()))
      .subscribe(
        data => {

          this.results = data;
          this.books = [];
          for (var item in this.results.items) {
            if (this.results.items[item].volumeInfo.hasOwnProperty('imageLinks') 
            && this.results.items[item].volumeInfo.hasOwnProperty('description')
            && this.results.items[item].volumeInfo.hasOwnProperty('categories')
            && this.results.items[item].hasOwnProperty('searchInfo')) {
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
}

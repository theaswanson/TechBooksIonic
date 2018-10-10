import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';
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

  constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http) {
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

        console.log(this.books);

        err => {
          console.log("Error in searchFunction.");
          alert("Error in searchFunction.");
        }
      })
  }
}
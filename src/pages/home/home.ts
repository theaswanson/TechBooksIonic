import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http } from '@angular/http';
import { CardsPage } from '../cards/cards';
import 'rxjs/add/operator/map';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  results:any;
  books:any;
  noResults:any;
  loading:any;

  constructor(public navCtrl: NavController, public http: Http) {
    this.books = [];
    this.noResults = false;
    this.loading = false;
  }

  openCards(id: string) {
    this.navCtrl.push(CardsPage, {
      bookId: id,
    })
  }
  searchFunction(q: string) {
    this.books = [];
    this.loading = true;

    this.http.get('https://www.googleapis.com/books/v1/volumes?q=' + q.replace(/[^a-zA-Z ]/g, "")).map(res => res.json()).subscribe(
      data => {

        this.noResults = false;
        this.results = data;

        for (var item in this.results.items) {
          if (this.results.items[item].volumeInfo.hasOwnProperty('imageLinks')) {
            this.books.push(this.results.items[item]);
          }
        }
        if (this.books.length == 0) {
          this.noResults = true;
        }

        this.loading = false;

        console.log(this.books);

        err => {
          console.log("Error in searchFunction.");
          alert("Error in searchFunction.");
        }
      });
  }
}

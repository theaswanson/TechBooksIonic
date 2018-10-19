import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http } from '@angular/http';
import { CardsPage } from '../cards/cards';
import { Keyboard } from '@ionic-native/keyboard';
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

  constructor(public navCtrl: NavController, public http: Http, private keyboard: Keyboard) {
    this.books = [];
    this.noResults = false;
    this.loading = false;
  }

  openCards(id: string) {
    this.navCtrl.push(CardsPage, {
      bookId: id,
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

      this.http.get('https://www.googleapis.com/books/v1/volumes?q=' + q.replace(/[^a-zA-Z1-9 ]/g, "")).map(res => res.json()).subscribe(
        data => {

          this.results = data;

          for (var item in this.results.items) {
            if (this.results.items[item].volumeInfo.hasOwnProperty('imageLinks') && this.results.items[item].volumeInfo.hasOwnProperty('description')) {
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
}

import { Component, ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http } from '@angular/http';
import { IntroSlidesPage } from '../intro-slides/intro-slides';

import 'rxjs/add/operator/map';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  @ViewChild(Storage) storage: Storage;
  results:any;
  books:any;

  constructor(public navCtrl: NavController, public http: Http) {
    this.books = [];
  }

    

  searchFunction(q: string) {

    this.http.get('https://www.googleapis.com/books/v1/volumes?q=' + q.replace(/[^a-zA-Z ]/g, "")).map(res => res.json()).subscribe(
      data => {
        var bookId = data.items[0].id;

        this.http.get('https://www.googleapis.com/books/v1/volumes/' + bookId + '/associated').map(res => res.json()).subscribe(
          data => {
            this.results = data;
            this.books = [];

            for (var item in this.results.items) {
              this.books.push(this.results.items[item].volumeInfo);
            }

            console.log(this.books);

            err => {
              console.log("Error in searchFunction.");
              alert("Error in searchFunction.");
            }
          })
      });
  }
}

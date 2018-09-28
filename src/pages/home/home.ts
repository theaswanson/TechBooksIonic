import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public http: Http) {

  }

  results: any;

  searchFunction(q: string) {
    this.http.get('https://www.googleapis.com/books/v1/volumes?q=' + q.replace(/[^a-zA-Z ]/g, "")).map(res => res.json()).subscribe(
      data => {
        
        var bookId = data.items[0].id

        this.http.get('https://www.googleapis.com/books/v1/volumes/' + bookId + '/associated' ).map(res => res.json()).subscribe(
          data => {

            var titles:string = "";
            this.results = data;

            for (var item in this.results.items) {
              titles += this.results.items[item].volumeInfo.title + "\n";
            }

            alert(titles);

            err => {
              console.log("Error in searchFunction.");
              alert("Error in searchFunction.");
            }
          })
      });
  }
}

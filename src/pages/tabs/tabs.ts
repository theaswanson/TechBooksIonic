import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { LibraryPage } from '../library/library';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { SettingsPage } from '../settings/settings';
import { LoginPage } from '../login/login';


@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = LibraryPage;
  tab3Root = SettingsPage;
  user:any

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    
  }
}

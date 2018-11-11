import { Component } from '@angular/core';
import { NavParams } from 'ionic-angular';

import { LibraryPage } from '../library/library';
import { HomePage } from '../home/home';
import { SettingsPage } from '../settings/settings';



@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = LibraryPage;
  tab3Root = SettingsPage;
  myIndex: number;
 
  constructor( public navParams: NavParams) {
    this.myIndex = navParams.data.tabIndex || 0;
  }
}

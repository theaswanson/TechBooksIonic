import { Component, ViewChild } from '@angular/core';

import { HomePage } from '../home/home';
import { LibraryPage } from '../library/library';
import { SettingsPage } from '../settings/settings';
import  { TabsPage } from '../tabs/tabs';

import { IonicPage, NavController, Nav } from 'ionic-angular';

export interface PageInterface {
  title: string;
  pageName: string;
  tabComponent?: any;
  index?: number;
  icon: string;
}

@IonicPage()
@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html',
})
export class MenuPage {

  rootPage = TabsPage;
 
  @ViewChild(Nav) nav: Nav;
 
  pages: PageInterface[] = [
    { title: 'Search', pageName: 'TabsPage', tabComponent: HomePage, index: 0, icon: 'search' },
    { title: 'Library', pageName: 'TabsPage', tabComponent: LibraryPage, index: 1, icon: 'book' },
    { title: 'Settings', pageName: 'TabsPage', tabComponent: SettingsPage, index: 2, icon: 'settings' },
  ];
 
  constructor(public navCtrl: NavController) { }
 
  openPage(page: PageInterface) {
    let params = {};
 
    if (page.index) {
      params = { tabIndex: page.index };
    }
 
    if (this.nav.getActiveChildNav() && page.index != undefined) {
      this.nav.getActiveChildNav().select(page.index);
    } else {

      this.nav.setRoot(page.pageName, params);
    }
  }
 
  isActive(page: PageInterface) {

    let childNav = this.nav.getActiveChildNav();
 
    if (childNav) {
      if (childNav.getSelected() && childNav.getSelected().root === page.tabComponent) {
        return 'primary';
      }
      return;
    }
 
    if (this.nav.getActive() && this.nav.getActive().name === page.pageName) {
      return 'primary';
    }
    return;
  }
}

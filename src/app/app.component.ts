import { Component, ViewChild } from '@angular/core';
import { Platform, Nav, NavController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { LibraryPage } from '../pages/library/library';
import { SettingsPage } from '../pages/settings/settings';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  rootPage:any = LoginPage;
  pages: Array<{title: string, component: any}>;
 
  
  constructor(public platform: Platform) {
    this.pages = [
      { title: 'Search', component: HomePage },
      { title: 'Library', component: LibraryPage },
      { title: 'Settings', component: SettingsPage },

    ];
  }

  initializeApp() {
    this.platform.ready().then(() => {
      StatusBar.styleDefault();
      SplashScreen.hide();
    })
  }

  openPage(page) {
    this.nav.setRoot(page.component);
  }
}

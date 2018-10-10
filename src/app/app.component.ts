import { HomePage } from './../pages/home/home';
import { Component, ViewChild } from '@angular/core';
import { Platform, NavController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';


import { IntroSlidesPage } from '../pages/intro-slides/intro-slides';
import { Storage } from '@ionic/storage';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = HomePage;
  newUser:boolean = true;
  @ViewChild('content') nav: NavController;

  constructor( private storage: Storage, platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      if(!storage.get('newUser')){
        this.rootPage= HomePage;
       }
       else{
         this.rootPage= IntroSlidesPage;
         storage.set('newUser',false)
       }
        statusBar.styleDefault();
      

      splashScreen.hide();
    });
  }
}

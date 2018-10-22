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
  @ViewChild('content') nav: NavController;
  rootPage:any;
  //Assigned this key value
  newUser:boolean;

  constructor( public storage: Storage, platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {

      //Here's where I made all the changes
      storage.get('newUser').then((condition) =>{ 
        if(condition != false){
          this.rootPage=HomePage;
        }
        else{
          this.rootPage=IntroSlidesPage;
          storage.set('newUser',true); 
        }
      });
      //End

        statusBar.styleDefault();
      

      splashScreen.hide();
    });
  }
}

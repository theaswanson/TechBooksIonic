import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { SwipeCardsModule } from 'ng2-swipe-cards';

import { HomePage } from '../pages/home/home';
import { MenuPage } from '../pages/menu/menu';
import { TabsPage } from '../pages/tabs/tabs';
import { LoginPage } from '../pages/login/login';
import { CardsPage } from '../pages/cards/cards';
import { SettingsPage } from '../pages/settings/settings';
import { LibraryPage } from '../pages/library/library';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HttpModule } from '@angular/http';
import { Keyboard } from '@ionic-native/keyboard';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { GoogleLoginComponent } from  '../components/google-login/google-login';
import { firebaseConfig } from '../config'

import { GooglePlus } from '@ionic-native/google-plus'; // We'll install this in the next section

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    TabsPage,
    LoginPage,
    MenuPage,
    GoogleLoginComponent,
    SettingsPage,
    LibraryPage,
    CardsPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig.fire),
    AngularFireAuthModule,
    SwipeCardsModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    TabsPage,
    LoginPage,
    SettingsPage,
    LibraryPage,
    CardsPage,
    MenuPage
  ],
  providers: [
    StatusBar,
    GooglePlus,
    SplashScreen,
    Keyboard,
    AngularFireAuthModule,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}

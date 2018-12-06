import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { SwipeCardsModule } from 'ng2-swipe-cards';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { LoginPage } from '../pages/login/login';
import { CardsPage } from '../pages/cards/cards';
import { SettingsPage } from '../pages/settings/settings';
import { LibraryPage } from '../pages/library/library';
import { EasterEggPage } from '../pages/easter-egg/easter-egg';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HttpModule } from '@angular/http';
import { Keyboard } from '@ionic-native/keyboard';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { GoogleLoginComponent } from  '../components/google-login/google-login';
import { firebaseConfig } from '../config'

import { GooglePlus } from '@ionic-native/google-plus';
import { BookLogicProvider } from '../providers/book-logic/book-logic'; // We'll install this in the next section

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    LoginPage,
    GoogleLoginComponent,
    SettingsPage,
    LibraryPage,
    CardsPage,
    EasterEggPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig.fire),
    AngularFireAuthModule,
    AngularFirestoreModule,
    SwipeCardsModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    LoginPage,
    SettingsPage,
    LibraryPage,
    CardsPage,
    EasterEggPage
  ],
  providers: [
    StatusBar,
    GooglePlus,
    SplashScreen,
    Keyboard,
    AngularFireAuthModule,
    BookLogicProvider,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}

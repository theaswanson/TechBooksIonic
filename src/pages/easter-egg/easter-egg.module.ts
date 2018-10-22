import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EasterEggPage } from './easter-egg';

@NgModule({
  declarations: [
    EasterEggPage,
  ],
  imports: [
    IonicPageModule.forChild(EasterEggPage),
  ],
})
export class EasterEggPageModule {}

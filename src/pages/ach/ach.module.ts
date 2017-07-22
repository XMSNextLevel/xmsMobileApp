import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AchPage } from './ach';

@NgModule({
  declarations: [
    AchPage,
  ],
  imports: [
    IonicPageModule.forChild(AchPage),
  ],
  exports: [
    AchPage
  ]
})
export class AchPageModule {}

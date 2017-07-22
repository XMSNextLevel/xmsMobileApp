import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NewAchPage } from './new-ach';

@NgModule({
  declarations: [
    NewAchPage,
  ],
  imports: [
    IonicPageModule.forChild(NewAchPage),
  ],
  exports: [
    NewAchPage
  ]
})
export class NewAchPageModule {}

import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CCInfoPage } from './ccInfo';

@NgModule({
  declarations: [
    CCInfoPage,
  ],
  imports: [
    IonicPageModule.forChild(CCInfoPage),
  ],
  exports: [
    CCInfoPage
  ]
})
export class CCInfoPageModule {}

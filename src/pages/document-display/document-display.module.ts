import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DocumentDisplayPage } from './document-display';

@NgModule({
  declarations: [
    DocumentDisplayPage,
  ],
  imports: [
    IonicPageModule.forChild(DocumentDisplayPage),
  ],
  exports: [
    DocumentDisplayPage
  ]
})
export class DocumentDisplayPageDModule { }

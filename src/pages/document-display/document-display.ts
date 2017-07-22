import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { StatementProvider, Statement, Document } from '../../providers/statement/statement'
import { DocumentDisplayProvider} from '../../providers/document-display/document-display'
import { LoanProvider } from '../../providers/loan/loan'


/**
 * Generated class for the TransactionHistoryPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-document-display',
  templateUrl: 'document-display.html',
})
export class DocumentDisplayPage {


  // public document: Document = {
  //   docByteArray: ''
  // };
  public document: Document;
  public decodedString: string;
  public image: any;
  public isHtml: boolean = false;
  public isPdf: boolean = false;
  public isJpg: boolean = false;
  public isPng: boolean = false;
  public isTiff: boolean = false;
  public isBmp: boolean  = false;
  // public fileUrl: string = this.navParams.get("fileUrl");

  constructor(public navCtrl: NavController, public navParams: NavParams, public documentDisplayProvider: DocumentDisplayProvider, public statementProvider: StatementProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DocumentDisplayPage');
    this.document = this.statementProvider.getDocument();
    /*
    PDF(0, "application/pdf"),
        HTML(1, "text/html"),
        TXT(2, "text/plain"),
        TIFF(3, "image/tiff"),
        JPEG(4,"image/jpeg"),
        PNG(5,"image/png"),
        BMP(6,"image/bmp");
    */
    console.log("String before decode: ", this.document.base64EncodedDocument);
    this.decodedString = atob(this.document.base64EncodedDocument);

    if (this.document.documentType === "PDF") {
      this.isPdf = true;
      this.image = "data:application/pdf;base64," + this.document.base64EncodedDocument;
    } else if (this.document.documentType === "HTML") {
      this.isHtml= true;
      this.image = this.decodedString;
    } else if (this.document.documentType === "TXT") {
      this.image = this.decodedString;
    } else if (this.document.documentType === "TIFF") {
      this.isTiff = true;
      this.image = "data:image/tiff;base64," + this.document.base64EncodedDocument;
    } else if (this.document.documentType === "JPEG") {
      this.isJpg = true;
      this.image = "data:image/jpeg;base64," + this.document.base64EncodedDocument;
    } else if (this.document.documentType === "PNG") {
      this.isPng = true;
      this.image = "data:image/png;base64," + this.document.base64EncodedDocument;
    } else if (this.document.documentType === "BMP") {
      this.isBmp = true;
      this.image = "data:image/bmp;base64," + this.document.base64EncodedDocument;
    }

    console.log("Decoded String: ", this.decodedString);
  }
}

import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Common } from '../common';
import 'rxjs/add/operator/map';

/*
  Generated class for the UserProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/

export class borrower {
  username: string;
  firstName: string;
  lastName: string;
  token: string;
  mobileNumber: string;
  actived: string;
}

@Injectable()
export class BorrowerProvider {

  private token: string = '123';
  private isLogin = false;
  private username: string;
  private apiKey: string = '52fde37d-b726-4287-a2df-e8974ad5e57f'
  private userInfo: borrower;

  constructor(private http: Http) {
    console.log('Hello UserProvider Provider');
  }

  setUserInfo(tokn: string, username: string) {
    this.token = tokn;
    this.username = username
    this.isLogin = true;
  }

  getToken() {
    return this.token;
  }

  setToken(newToken: string) {
    this.token = newToken;
  }

  getApiKey() {
    return this.apiKey;
  }

  getUserName() {
    return this.username;
  }

  getIsactive() {
    return this.userInfo.actived;
  }

  getIsLogin() {
    return this.isLogin;
  }

  setIsLogin(isLoggedIn: boolean) {
    this.isLogin = isLoggedIn;
  }

  getUserInfo() {
    return this.userInfo;
  }

}

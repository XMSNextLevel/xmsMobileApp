import { Injectable } from '@angular/core';
import { HttpClient } from '../http-client';
import { HttpHelper } from '../http-helpers';
import { Common } from '../common';
import 'rxjs/add/operator/map';

/*
  Generated class for the LoginProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class LoginProvider {

  private baseUrl: string = this.common.getBaseUrl();
  private Login: boolean = false;
  private httpHelper: HttpHelper = new HttpHelper();

  constructor(private http: HttpClient,
    private common: Common) {
  }

  isLogin() {
    return this.Login;
  }

  setIsLogin(isLoggedIn: boolean) {
    this.Login = isLoggedIn;
  }

  login(username: string, password: string) {
    let cr = [{ key: 'password', val: password }, { key: 'username', val: username }];
    return this.http.post(`${this.baseUrl}/auth/login/`, null, cr);
  }
}

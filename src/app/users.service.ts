import { Injectable } from '@angular/core';
import * as url from 'url';
import { Constants } from './constant';
import { HttpClient } from '@angular/common/http';
import { User } from './user.model';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private token = null;
  public get Token() {
    return this.token;
  }
  public set Token(value) {
    this.token = value;
    localStorage.setItem('token', value);
  }
  public user: User = null;
  constructor(
    private http: HttpClient,
    private router: Router,
  ) {
    this.token = localStorage.getItem('token');
    if (this.token) {
      this.getUserInfo();
    }
  }
  async reg(regDto) {
    const requestUrl = Constants.GenRequestURL(
      '/users'
    );
    const result = await this.http.post(requestUrl, regDto).toPromise();
    this.Token = result['message'];
    await this.getUserInfo();
    return <string>result['message'];
  }
  async login(loginDto: {}) {
    const requestUrl = Constants.GenRequestURL(
      '/users/token'
    );
    const result = await this.http.post(requestUrl, loginDto).toPromise();
    this.Token = result['message'];
    await this.getUserInfo();
    return <string>result['message'];
  }
  async getUserInfo() {
    const requestUrl = Constants.GenRequestURL(
      '/user',
      {
        'token': this.token
      },
    );
    try {
      this.user = await this.http.get<User>(requestUrl).toPromise();
    } catch (err) {
      console.log(err);
      this.router.navigateByUrl('/login');
    }
  }
}

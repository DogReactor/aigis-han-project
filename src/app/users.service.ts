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
  public token = null;
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
  async login(loginDto: {}) {
    const requestUrl = Constants.GenRequestURL(
      '/users/token'
    );
    try {
      const result = await this.http.post(requestUrl, loginDto).toPromise();
      this.token = result['message'];
      localStorage.setItem('token', this.token);
      this.getUserInfo();
      return <string>result['message'];
    } catch (err) {
      return null;
    }
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
      console.log(this.user);
    } catch (err) {
      console.log(err);
      this.router.navigateByUrl('/login');
    }
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UsersService } from './users.service';
import { Router } from '@angular/router';
import { Constants } from './constant';

@Injectable({
  providedIn: 'root'
})
export class SectionsService {
  constructor(private http: HttpClient, private usersService: UsersService, private router: Router) { }
  async getAllocatedSectionsCount() {
    if (!this.usersService.Token) {
      this.router.navigateByUrl('/login');
    }
    const requestURL = Constants.GenRequestURL(
      '/assets/sections/count',
      {
        token: this.usersService.Token
      }
    );
    try {
      const r = await this.http.get(requestURL).toPromise();
      return r;
    } catch (err) {
      console.log(err);
      this.router.navigateByUrl('/login');
    }
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { File } from './files.model';
import * as url from 'url';
import { Constants } from './constant';
import { Router } from '@angular/router';
import { UsersService } from './users.service';
import * as Rx from 'rxjs';
import { Section } from './editor/section.model';

@Injectable({
  providedIn: 'root'
})
export class FilesService {

  files: File[] = [];
  private keyword = '';
  set Keyword(value) {
    if (this.keyword === value) { return; }
    this.keyword = value;
    localStorage.setItem('keyword', value);
    this.getFiles(false, true);
  }
  get Keyword() { return this.keyword; }

  private sort = '';
  set Sort(value) {
    if (this.sort === value) { return; }
    this.sort = value;
    this.getFiles(false, true);
  }
  get Sort() { return this.sort; }
  page = 0;
  limit = 10;
  noMoreSubject = new Rx.Subject();
  constructor(private http: HttpClient, private router: Router, private usersService: UsersService) {
    this.keyword = localStorage.getItem('keyword') || '';
  }
  async getFiles(update: boolean = false, force = false) {
    if (!this.usersService.Token) {
      this.router.navigateByUrl('/login');
      return;
    }
    if (this.files.length !== 0 && !update && !force) { return; }

    if (!update) {
      this.page = 0;
      this.files = [];
    }
    const requestUrl = Constants.GenRequestURL(
      '/assets/files',
      {
        token: this.usersService.Token,
        reg: this.keyword,
        skip: this.page * this.limit,
        limit: this.limit,
        sort: this.sort,
      }
    );
    try {
      const result = await this.http.get<File[]>(requestUrl).toPromise();
      console.log(result);
      if (result.length !== 0) {
        this.page++;
        this.files = this.files.concat(result);
      } else {
        return false;
      }

    } catch (err) {
      this.router.navigateByUrl('/login');
    }
    return true;
  }
  async getSectionsByFiles(fileId: string) {
    const requestUrl = Constants.GenRequestURL(
      `/assets/file/${fileId}/sections`,
      {
        token: this.usersService.Token,
        contracted: 0,
        skip: 0,
        limit: 0,
      }
    );
    const sections = await this.http.get<Section[]>(requestUrl).toPromise();
    return sections;
  }
  async allocateSection(index: number, count: number) {
    const file = this.files[index];
    if (!file) { throw new Error('no such file'); }

    const requestUrl = Constants.GenRequestURL(
      `/assets/file/${file._id}/contract`,
      {
        token: this.usersService.Token
      }
    );

    const r = await this.http.post<File>(requestUrl, {
      count
    }).toPromise();
    this.files[index] = r;
    console.log(r);
  }
}

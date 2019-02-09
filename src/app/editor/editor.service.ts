import { Injectable } from '@angular/core';
import { UsersService } from '../users.service';
import { Router } from '@angular/router';
import { Constants } from '../constant';
import { HttpClient } from '@angular/common/http';
import { Section, SectionStatus } from './section.model';
import { Commit } from './commit';
interface CommitDto {
  text: string;
  sectionId: string;
  type: number;
  originId: string;
  polished: boolean;
}

@Injectable()
export class EditorService {
  notCommited: CommitDto[] = [];
  constructor(
    private http: HttpClient,
    private usersService: UsersService,
    private router: Router,
  ) {
    try {
      this.notCommited = JSON.parse(localStorage.getItem('notCommited')) || [];
    } catch (err) { }
  }
  async getSectionsByUser(filter: number) {
    if (!this.usersService.Token) { this.router.navigateByUrl('/login'); }
    const requestURL = Constants.GenRequestURL(
      '/assets/sections',
      {
        token: this.usersService.Token,
        skip: 0,
        limit: 0,
        filter,
      }
    );
    try {
      const r = await this.http.get<Section[]>(requestURL).toPromise();
      console.log(r);
      return r;
    } catch (err) {
      console.error(err);
      this.router.navigateByUrl('/login');
    }
  }
  async getSectionsByFile(fileId: string) {
    if (!this.usersService.Token) { this.router.navigateByUrl('/login'); }
    const requestURL = Constants.GenRequestURL(
      '/assets/file/' + fileId + '/sections',
      {
        token: this.usersService.Token,
        skip: 0,
        limit: 0,
        contracted: 0
      }
    );
    try {
      const r = await this.http.get<Section[]>(requestURL).toPromise();
      return r;
    } catch (err) {
      console.error(err);
      this.router.navigateByUrl('/login');
    }
  }
  addCommit(commitDto: CommitDto) {
    const exist = this.notCommited.findIndex(v => v.sectionId === commitDto.sectionId);
    if (exist !== -1) {
      this.notCommited[exist] = commitDto;
    } else {
      this.notCommited.push(commitDto);
    }
    localStorage.setItem('notCommited', JSON.stringify(this.notCommited));
  }
  deleteCommit(sectionId: string) {
    const exist = this.notCommited.findIndex(v => v.sectionId === sectionId);
    console.log(exist);
    if (exist >= 0) {
      this.notCommited.splice(exist, 1);
    }
    localStorage.setItem('notCommited', JSON.stringify(this.notCommited));
  }

  async commit() {
    const requestURL = Constants.GenRequestURL(
      '/assets/sections',
      {
        token: this.usersService.Token
      }
    );
    try {
      const jobs = this.notCommited.filter(v => v.text !== '');
      const result = await this.http.post(requestURL, {
        submitedWork: {
          works: jobs
        },
      }).toPromise();
      console.log(result);
      // Todo:冲突处理

      this.notCommited = [];
      localStorage.setItem('notCommited', '[]');
    } catch (err) {
      console.log(err);
    }
  }
}

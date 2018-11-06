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
  async getSections(filter: number) {
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
  genTranslationList(rawSections: Section[]) {
    const list = rawSections.map((section) => {
      const row: any = {};
      row.sectionId = section._id;
      row.desc = section.desc;
      const rawCommit = Commit.id(section.commits, section.rawCommit);
      row.rawCommit = rawCommit;
      const translatedCommit = Commit.findLatestTranslation(section.commits);
      row.translatedCommit = translatedCommit;
      const lastCommitId = translatedCommit ? translatedCommit._id : rawCommit._id;
      const notCommited = this.notCommited.find((commit) => {
        if (commit.sectionId !== section._id) { return false; }
        if (commit.type !== SectionStatus.Translated) { return false; }
        return true;
      });
      row.notCommited = notCommited;
      if (notCommited && notCommited.originId !== lastCommitId) {
        row.conflict = true;
      }
      return row;
    });
    return list;
  }
  addCommit(commitDto: CommitDto) {
    const exist = this.notCommited.findIndex(v => v.sectionId === commitDto.sectionId && v.type === commitDto.type);
    if (exist !== -1) {
      this.notCommited[exist] = commitDto;
    } else {
      this.notCommited.push(commitDto);
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
      const result = await this.http.post(requestURL, {
        submitedWork: {
          works: this.notCommited
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

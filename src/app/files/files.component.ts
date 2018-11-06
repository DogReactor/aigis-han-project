import { Component, OnInit, OnDestroy } from '@angular/core';
import { FilesService } from '../files.service';
import { Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, mergeMap } from 'rxjs/operators';
import { SectionsService } from '../sections.service';

@Component({
  selector: 'app-files',
  templateUrl: './files.component.html',
  styleUrls: ['./files.component.css']
})
export class FilesComponent implements OnInit {
  keyword = '';
  nomore = false;
  disable = false;
  sort = '';
  myTranslated = 0;
  myTotal = 0;
  private searchKeyword$ = new Subject<string>();
  constructor(private filesService: FilesService, private sectionsService: SectionsService) {
    this.searchKeyword$.pipe(
      debounceTime(400),
      distinctUntilChanged(),
    ).subscribe(async v => {
      filesService.Keyword = v;
      this.nomore = false;
      this.disable = false;
    });

    this.keyword = filesService.Keyword;
    this.sort = filesService.Sort;
  }

  async ngOnInit() {
    this.filesService.getFiles();
    const r = await this.sectionsService.getAllocatedSectionsCount() as any;
    r.forEach(v => {
      this.myTotal += v.count;
      if (v._id === 1) { this.myTranslated = v.count; }
    });
  }
  onSortSelectionChanged(event) {
    this.filesService.Sort = event.value;
    this.nomore = false;
    this.disable = false;
  }
  async loadMore() {
    this.disable = true;
    const r = await this.filesService.getFiles(true);
    if (r) { this.disable = false; } else {
      this.disable = true; this.nomore = true;
    }
  }
}

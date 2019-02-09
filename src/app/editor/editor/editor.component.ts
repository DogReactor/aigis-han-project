import { Component, HostListener, OnInit } from '@angular/core';
import { saveAs } from 'file-saver';
import { MatSnackBar, MatTableDataSource } from '@angular/material';
import { ActivatedRoute } from '@angular/router';
import { EditorService } from '../editor.service';
import { SectionStatus, Section } from '../section.model';
import { Commit } from '../commit';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class EditorComponent implements OnInit {
  typeText = ['生肉', '翻译', '校对', '润色'];
  type = SectionStatus.Translated;
  fileId = '';
  showAll = false;
  dataSource: MatTableDataSource<any> = null;
  Commit = Commit;
  constructor(
    private snackBar: MatSnackBar,
    private route: ActivatedRoute,
    public editorService: EditorService,
  ) {
    route.params.subscribe(params => {
      this.fileId = params['id'];
      if (this.fileId !== 'null') {
        this.type = SectionStatus.Corrected;
      }
    });
  }
  textList = [];
  displayedColumns = ['desc', 'raw', 'origin', 'modify'];

  async ngOnInit() {
    if (this.type === SectionStatus.Translated) {
      const rawSections = await this.editorService.getSectionsByUser(4);
      if (!rawSections) { return; }
      this.textList = this.genList(rawSections);
    } else {
      const rawSections = await this.editorService.getSectionsByFile(this.fileId);
      if (!rawSections) { return; }
      this.textList = this.genList(rawSections);
    }
    console.log(this.textList);
    this.dataSource = new MatTableDataSource(this.textList);
  }
  onTextareaBlur(section, text) {
    if (!text) {
      this.editorService.deleteCommit(section.sectionId);
      section.notCommited = undefined;
      return;
    }
    section.notCommited = {
      text,
      sectionId: section.sectionId,
      type: this.type,
      originId: section.originCommit,
      polished: false
    };
    this.editorService.addCommit(section.notCommited);
  }
  async commit() {
    await this.editorService.commit();
    this.snackBar.open('保存成功', '', {
      duration: 3000,
      verticalPosition: 'top',
    });
    this.ngOnInit();
  }
  async onShowAllClick(isShowAll) {
    this.showAll = isShowAll;
    await this.ngOnInit();
  }

  genList(rawSections: Section[]) {
    const list = [];
    rawSections.forEach((section) => {
      const row: any = {};
      row.sectionId = section._id;
      row.desc = section.desc;
      row.originCommit = '';
      // 原文
      const rawCommit = Commit.id(section.commits, section.rawCommit);
      row.rawCommit = rawCommit;
      // 叶子
      const [leaves, status] = Commit.findLeaves(section.commits);

      // 设置默认基础提交
      if (this.type === SectionStatus.Translated) {
        row.originCommit = section.rawCommit;
      }
      if (this.type === SectionStatus.Corrected && status >= SectionStatus.Translated) {
        row.originCommit = (<Array<any>>leaves).find(v => v.type === SectionStatus.Translated)._id;
      }
      if (this.type === SectionStatus.Polished && status >= SectionStatus.Corrected) {
        row.originCommit = (<Array<any>>leaves).find(v => v.type === SectionStatus.Corrected)._id;
      }
      if (row.originCommit === '') { return; }
      row.leaves = leaves;
      row.status = status;
      if (status >= this.type && this.showAll === false) {
        return;
      }
      // 缓存
      const notCommited = this.editorService.notCommited.find((commit) => {
        if (commit.sectionId !== section._id) { return false; }
        // if (commit.type !== SectionStatus.Translated) { return false; }
        return true;
      });
      row.notCommited = notCommited;
      if (notCommited && (<Array<any>>leaves).findIndex(v => v._id === notCommited.originId)) {
        row.originCommit = notCommited.originId;
      }
      list.push(row);
    });
    return list;
  }
  getCommitInLeaves(leaves, id) {
    return leaves.find(v => v._id === id);
  }
}

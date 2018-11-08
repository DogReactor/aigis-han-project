import { Component, HostListener, OnInit } from '@angular/core';
import { saveAs } from 'file-saver';
import { MatSnackBar } from '@angular/material';
import { ActivatedRoute } from '@angular/router';
import { EditorService } from '../editor.service';
import { SectionStatus } from '../section.model';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class EditorComponent implements OnInit {
  type = SectionStatus.Translated; // Todo
  showAll = false;
  constructor(
    private snackBar: MatSnackBar,
    private route: ActivatedRoute,
    public editorService: EditorService,
  ) {

  }
  textList = [];
  displayedColumns = ['desc', 'origin', 'trans'];
  file: File = undefined;

  async ngOnInit() {
    const rawSections = await this.editorService.getSections(this.showAll ? 4 : 0);
    if (!rawSections) { return; }
    const textList = this.editorService.genTranslationList(rawSections);
    this.textList = textList;
  }
  onTextareaBlur(section, text) {
    if (!text) { return; }
    section.notCommited = {
      text,
      sectionId: section.sectionId,
      type: this.type,
      originId: section.translatedCommit ? section.translatedCommit._id : section.rawCommit._id,
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
}

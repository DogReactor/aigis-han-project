import { Component, OnInit, Input } from '@angular/core';
import { File } from '../files.model';
import { UsersService } from '../users.service';
import { FilesService } from '../files.service';
import { MatDialog } from '@angular/material';
import { AllocateDialogComponent } from './allocate.component';
import { PreviewDialogComponent } from './preview.component';

@Component({
  selector: 'app-files-detail',
  templateUrl: './files-detail.component.html',
  styleUrls: ['./files-detail.component.css'],
})
export class FilesDetailComponent implements OnInit {
  constructor(
    private usersService: UsersService,
    private filesService: FilesService,
    private dialog: MatDialog,
  ) { }

  _file: File;
  @Input() index;
  get file() {
    return this._file;
  }
  @Input() set file(file: File) {
    this._file = file;
    const r = file.contractors.find(v => {
      return v.user === this.usersService.user._id;
    });
    this.myContractor = r ? r.count : 0;
  }
  public myContractor;
  public data: any[];
  ngOnInit() {
    this.data = [
      { value: this.file.translated, color: '#20A0FF', desc: '已翻译' },
      { value: this.file.corrected, color: '#F7BA2A', desc: '已校对' },
      { value: this.file.polished, color: '#13CE66', desc: '已润色' },
    ];
  }
  openAllocateDialog() {
    this.dialog.open(AllocateDialogComponent, {
      width: '250px',
      data: { index: this.index, maxCount: this.file.sectionCount },
    });
  }
  async openPreviewDialog() {
    this.dialog.open(PreviewDialogComponent, {
      width: '70%',
      data: {
        fileID: this.file._id,
      },
    });
  }

}

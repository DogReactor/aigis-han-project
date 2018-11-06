import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FilesService } from '../files.service';
import { Section } from '../editor/section.model';
import { Commit } from '../editor/commit';

@Component({
    selector: 'app-files-detail-preview-dialog',
    templateUrl: 'preview.component.html',
})
export class PreviewDialogComponent implements OnInit {

    textList: string[] = [];
    allocateCount = 0;
    constructor(
        public dialogRef: MatDialogRef<PreviewDialogComponent>,
        @Inject(MAT_DIALOG_DATA) public data: { fileID: string },
        private filesService: FilesService
    ) { }
    async ngOnInit() {
        const sections = await this.filesService.getSectionsByFiles(this.data.fileID);
        this.getRawTexts(sections);
    }
    getRawTexts(sections: Section[]) {
        const list = sections.map(section => {
            return section.desc + '  ' + Commit.id(section.commits, section.rawCommit).text.replace('\\n', '\n');
        });
        this.textList = list;
    }
}

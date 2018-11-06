import { Component, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FilesService } from '../files.service';

@Component({
    selector: 'app-files-detail-allocate-dialog',
    templateUrl: 'allocate.component.html',
})
export class AllocateDialogComponent {

    allocateCount = 0;
    constructor(
        public dialogRef: MatDialogRef<AllocateDialogComponent>,
        @Inject(MAT_DIALOG_DATA) public data: { index: number, maxCount: number },
        private filesService: FilesService
    ) { }

    onNoClick(): void {
        this.dialogRef.close();
    }
    async onAllocateClick() {
        await this.filesService.allocateSection(this.data.index, this.allocateCount);
        this.dialogRef.close();
    }
    allocateAll() {
        this.allocateCount = this.data.maxCount > 100 ? 100 : this.data.maxCount;
    }

}

import { Component, HostListener } from '@angular/core';
import { saveAs } from 'file-saver';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class EditorComponent {
  constructor(private snackBar: MatSnackBar) {

  }
  textList = [];
  displayedColumns = ['no', 'origin', 'trans'];
  file: File = undefined;
  onFileSelect(event) {
    console.log(event);
  }
  @HostListener('document:dragleave', ['$event'])
  @HostListener('document:dragenter', ['$event'])
  @HostListener('document:dragover', ['$event'])
  @HostListener('document:drop', ['$event'])
  onDrage(e) {
    e.preventDefault();
  }
  onFileDrop(e: DragEvent) {
    const files = e.dataTransfer.files;

    if (files.length !== 1) {
      this.snackBar.open('暂不支持多文件', '', { verticalPosition: 'top' }); return;
    }
    const file = files[0];
    if (file.type !== 'text/plain') {
      this.snackBar.open('这不是TXT谢谢', '', { verticalPosition: 'top' }); return;
    }

    const reader = new FileReader();

    const self = this;

    const saved = localStorage.getItem(file.name);
    if (saved) {
      try {
        const savedO = JSON.parse(saved);
        if (savedO.lastModified > file.lastModified) {
          this.textList = savedO.data;
          this.compatibility();
          self.file = file;
          return;
        }
      } catch (ex) { console.log(ex); }
    }

    reader.onload = function (f) {
      const r = self.readFile(<string>this.result);
      self.textList = r;
      self.file = file;
    };
    reader.readAsText(file);
  }
  readFile(text: string) {
    const lines = text.split('\r\n');
    const data = [];
    for (let i = 0; i < lines.length; i++) {
      const ts = lines[i];
      if (ts === '') { continue; }
      const tsA = ts.split('\t');
      tsA[0] = tsA[0].replace(/\\n/g, '\n');
      if (tsA[1]) {
        tsA[1] = tsA[1].replace(/\\n/g, '\n');
      }
      const d = [i + 1, tsA[0] || '', tsA[1] || ''];
      data.push(d);
    }
    return data;
  }
  onTextInput() {
    this.saveText();
  }
  onKeyDown(event: KeyboardEvent, index) {
    if (event.ctrlKey === true && event.code === 'Enter') {
      const next = document.getElementById(`textarea-${index + 1}`);
      if (next) {
        next.focus();
      }
    }
  }
  saveText() {
    localStorage.setItem(this.file.name, JSON.stringify({
      lastModified: (new Date()).getTime(),
      data: this.textList
    }));
  }
  genText() {
    let s = '';
    for (const t of this.textList) {
      if (t[2] === '') { continue; }
      s += `${t[1].replace(/\n/g, '\\n')}\t${t[2].replace(/\n/g, '\\n')}\r\n`;
    }
    return s;
  }
  download() {
    const blob = new Blob([this.genText()], { type: 'text/plain;charset=utf-8' });
    saveAs(blob, this.file.name);
  }
  compatibility() {
    for (const t of this.textList) {
      t[1] = t[1].replace(/<br>/g, '\n');
    }
  }
}

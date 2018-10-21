import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-files-detail',
  templateUrl: './files-detail.component.html',
  styleUrls: ['./files-detail.component.css'],
})
export class FilesDetailComponent implements OnInit {

  constructor() { }
  data = [
    { value: 45, color: '#20A0FF', desc: '已发布' },
    { value: 70, color: '#F7BA2A', desc: '已翻译' },
    { value: 50, color: '#13CE66', desc: '已校对' },
  ];
  ngOnInit() {
  }

}

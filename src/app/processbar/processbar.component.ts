import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-processbar',
  templateUrl: './processbar.component.html',
  styleUrls: ['./processbar.component.css'],
})
export class ProcessbarComponent implements OnInit {

  constructor() { }
  @Input() data: Array<{ value: number, color: string }>;
  @Input() max: number;
  @Input() desc: boolean;
  ngOnInit() {
  }

}

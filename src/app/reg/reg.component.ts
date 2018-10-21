import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-reg',
  templateUrl: './reg.component.html',
  styleUrls: ['./reg.component.css']
})
export class RegComponent implements OnInit {

  regForm = new FormGroup({
    'username': new FormControl('', [Validators.required]),
    'password': new FormControl('', [Validators.required]),
    'mail': new FormControl('', [Validators.required, Validators.email]),
    'nickname': new FormControl('', [Validators.required]),
  });

  onSubmit() {
    console.log(this.regForm.value);
  }
  constructor() { }

  ngOnInit() {
  }

}

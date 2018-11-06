import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UsersService } from '../users.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';
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

  async onSubmit() {
    try {
      await this.usersService.reg(this.regForm.value);
      this.snackBar.open('注册成功', '', {
        duration: 3000,
      });
      this.router.navigateByUrl('/files');
    } catch (err) {
      if (err.error.code === 201) {
        alert('用户名已存在');
      }
      if (err.error.code === 202) {
        alert('邮箱已存在');
      }
    }
  }
  constructor(
    private usersService: UsersService,
    private router: Router,
    private snackBar: MatSnackBar,
  ) { }

  ngOnInit() {
  }

}

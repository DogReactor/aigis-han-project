import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { UsersService } from '../users.service';
import { MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup({
    'username': new FormControl('', [Validators.required]),
    'password': new FormControl('', [Validators.required]),
  });
  get username() {
    return this.loginForm.get('username');
  }

  get password() {
    return this.loginForm.get('password');
  }

  async onSubmit() {
    try {
      const result = await this.usersService.login(this.loginForm.value);
      this.snackBar.open('登入成功', '', {
        duration: 3000,
      });
      this.router.navigateByUrl('/files');
    } catch (err) {
      this.snackBar.open('用户名或密码错误', '', {
        duration: 3000,
      });
    }
  }
  constructor(
    private usersService: UsersService,
    private snackBar: MatSnackBar,
    private router: Router,
  ) { }

  ngOnInit() {
  }

}

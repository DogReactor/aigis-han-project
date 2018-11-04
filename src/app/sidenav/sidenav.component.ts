import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {

  constructor(private usersService: UsersService, private router: Router) { }

  ngOnInit() {
  }
  mypage() {
    if (this.usersService.token) {
    } else {
      this.router.navigateByUrl('/login');
    }
  }
}

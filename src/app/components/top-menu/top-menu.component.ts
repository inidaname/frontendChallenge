import { Component, OnInit } from '@angular/core';
import { ShareService } from 'src/app/services/share.service';
import { User } from 'src/app/interface/User';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-top-menu',
  templateUrl: './top-menu.component.html',
  styles: []
})
export class TopMenuComponent implements OnInit {

  userRegistered: User;
  collapsed = true;

  constructor(
    private mockUser: ShareService,
  ) {}

  ngOnInit(): void {
    this.mockUser
      .userData
      .subscribe((result: User) => this.userRegistered = result);
  }

  toggleCollapsed(): void {
    this.collapsed = !this.collapsed;
  }

  logOut(): void {
    this.mockUser.registerUser(null);
    this.userRegistered = null;
  }
}

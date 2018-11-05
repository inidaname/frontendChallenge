import { Component, OnInit } from '@angular/core';
import { ShareService } from 'src/app/services/share.service';
import { User } from 'src/app/interface/User';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-top-menu',
  templateUrl: './top-menu.component.html',
  styles: [`
  select.custom-select {
    margin: 0.5rem 0.5rem 0 0;
    width: auto;
  }
`]
})
export class TopMenuComponent implements OnInit {

  user: User;
  displayMonths = 2;
  navigation = 'select';
  showWeekNumbers = false;
  outsideDays = 'visible';
  datePicker: NgModel;
  datePicker2: NgModel;

  constructor(
    private mockUser: ShareService,
  ) {}

  ngOnInit(): void {
    this.mockUser.userData.subscribe((result: User) => this.user = result);
  }

  logOut(): void {
    this.mockUser.registerUser(null);
    this.user = null;
  }

  checkDate(date, type): void {
    const dateString: Date = new Date(date.year, date.month, date.day);
    this.mockUser.sortDates({dateString, type});
  }
}

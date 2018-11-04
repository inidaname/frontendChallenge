import { Component, OnInit } from '@angular/core';
import { ShareService } from 'src/app/services/share.service';
import { User } from 'src/app/interface/User';

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


  userEmail: string;
  displayMonths = 2;
  navigation = 'select';
  showWeekNumbers = false;
  outsideDays = 'visible';

  constructor(
    private mockUser: ShareService,
  ) {}

  ngOnInit() {
    this.mockUser.userData.subscribe((result: User) => {
      this.userEmail = result.email;
    });
  }
}

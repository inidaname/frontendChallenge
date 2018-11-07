import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User } from '../interface/User';

@Injectable({
  providedIn: 'root'
})
export class ShareService {

  private mockUser = new BehaviorSubject<User>(null);
  userData = this.mockUser.asObservable();

  constructor() { }

  registerUser(user: User) {
    this.mockUser.next(user);
  }
}

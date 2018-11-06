import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User } from '../interface/User';

@Injectable({
  providedIn: 'root'
})
export class ShareService {

  private regUser = new BehaviorSubject<User>(null);
  userData = this.regUser.asObservable();

  constructor() { }

  registerUser(user: User) {
    this.regUser.next(user);
  }
}

import {Injectable} from '@angular/core';
import {User} from '../../user/classes/user';
import {Workplace} from '../../workplace/classes/workplace';

@Injectable({
  providedIn: 'root'
})

export class UserService {
  user: User;

  constructor() {
  }

  initUser(user: User) {
    this.user = user;
  }

  getToken() {
    return this.user.token;
  }

  getWorkplace(): Workplace {
    return this.user.humanResource.workplace;
  }
}

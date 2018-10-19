import { Injectable } from '@angular/core';
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})

export class UserService implements User {

  id: string;
  profile_img: string;

  constructor() { }

  setUserData(id, profile_img) {
    this.id = id;
    this.profile_img = profile_img;
  }

}

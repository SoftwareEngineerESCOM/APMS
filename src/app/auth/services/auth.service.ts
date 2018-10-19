import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  authenticated = false;

  constructor() { }

  authenticate(): boolean {
    this.authenticated = true;
    return true;
  }

  isAuthenticated(): boolean {
    return this.authenticated;
  }

}

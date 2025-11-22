import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loggedIn = false;

  constructor() {}

  login(username: string, password: string): boolean {
    
    if (username === 'admin' && password === '1234') {
      this.loggedIn = true;
      localStorage.setItem('loggedIn', 'true'); 
      return true;
    }
    return false;
  }

  logout() {
    this.loggedIn = false;
    localStorage.removeItem('loggedIn');
  }

  isLoggedIn(): boolean {
    return this.loggedIn;
  }
}

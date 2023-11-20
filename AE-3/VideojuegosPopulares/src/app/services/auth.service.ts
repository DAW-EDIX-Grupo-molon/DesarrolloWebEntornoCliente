import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }
  private users = [
    { username: 'user1', password: 'pass1' },
    { username: 'invitado', password: 'invitado'},
  ];

  isAuthenticated = false;

  login(username: string, password: string): boolean {
    const user = this.users.find(u => u.username === username && u.password === password);

    if (user) {
      this.isAuthenticated = true;
      return true;
    } else {
      this.isAuthenticated = false;
      return false;
    }
  }

  logout(): void {
    this.isAuthenticated = false;
  }
}

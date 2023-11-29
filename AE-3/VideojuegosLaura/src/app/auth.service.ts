import { Injectable } from '@angular/core';

interface User {
  username: string;
  password: string;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private users: User[] = [
    { username: 'usuario1', password: '11111' },
    { username: 'usuario2', password: '22222' },
    { username: 'usuario3', password: '33333' },
    { username: 'usuario4', password: '44444' },

  ];

  private isAuthenticated = false;
  private currentUser: User | null = null;

  login(username: string, password: string): boolean {
    const isValidUser = this.users.some((user) => user.username === username && user.password === password);

    if (isValidUser) {
      this.isAuthenticated = true;
      this.currentUser = this.users.find((user) => user.username === username) || null;
    } else {
      this.isAuthenticated = false;
      this.currentUser = null;
    }

    return this.isAuthenticated;
  }

  logout(): void {
    this.isAuthenticated = false;
    this.currentUser = null;
  }

  isAuthenticatedUser(): boolean {
    return this.isAuthenticated;
  }

  getCurrentUser(): User | null {
    console.log('Current user:', this.currentUser);
    return this.currentUser;
  }
}
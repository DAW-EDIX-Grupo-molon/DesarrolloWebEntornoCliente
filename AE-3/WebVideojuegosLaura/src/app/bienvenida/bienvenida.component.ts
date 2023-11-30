import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-bienvenida',
  template: `
    <div *ngIf="currentUser">
    ¡Bienvenido, {{ currentUser?.username }}!
    </div>
  `,
})
export class BienvenidaComponent implements OnInit {
  currentUser: { username: string } | null = null;

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.currentUser = this.authService.getCurrentUser();
  }
}
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-nav-menu',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './nav-menu.component.html',
  styleUrl: './nav-menu.component.css'
})
export class NavMenuComponent {
  username: string = ' ';
  constructor(private authService: AuthService) {
    this.username = this.authService.username;
  }
}

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../services/auth.service';
import { userInfo } from 'os';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  constructor(private authService: AuthService) {
    
  }

  isAuthenticated(): boolean {
    return this.authService.isAuthenticated;
  }

  //Si is this.authService.isAuthenticated es true cojo el usuario del componente login y lo devuelvo en el h1
}

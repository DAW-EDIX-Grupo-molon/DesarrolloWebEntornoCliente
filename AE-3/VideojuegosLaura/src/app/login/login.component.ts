import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  login(): void {
    const success = this.authService.login(this.username, this.password);

    if (success) {
      // puede acceder
      this.router.navigate(['/']);
    } else {
      // no puede acceder
      console.error('Error de autenticación: Credenciales inválidas');
    }
  }
}
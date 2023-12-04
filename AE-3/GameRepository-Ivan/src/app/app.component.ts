import { Component } from '@angular/core';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  title = 'GameRepository-Ivan';

  userId=""
  password=""

  constructor (private userService: UserService){}

  /**
   * Función de control del proceso de login, si devuelve false el login no se habrá efectuado y devolverá false, en caso contrario devolverá true.
   * @returns boolean
   */
  logged():boolean {
    return this.userService.usuarioValido
  }

}

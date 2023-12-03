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

  logged():boolean {
    return this.userService.usuarioValido
  }

}

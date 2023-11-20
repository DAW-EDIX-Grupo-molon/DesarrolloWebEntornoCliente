import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-log-in',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './log-in.component.html',
  styleUrl: './log-in.component.css'
})
export class LogInComponent {
  username : string = '';
  password : string = '';

  incorrect: boolean =true;

  constructor(private authService: AuthService, private router: Router) {}
  public incorrectLogin(){
    this.incorrect = false
  } 
  public correctLogin(){
    this.incorrect = true;
    this.router.navigate(["/list"])
  } 

  login(): void {
    const isLoggedIn = this.authService.login(this.username, this.password);

    if (isLoggedIn) {
      this.correctLogin()
    } else {
      this.incorrectLogin()
    }
  }

}

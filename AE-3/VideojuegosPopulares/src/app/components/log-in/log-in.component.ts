import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-log-in',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './log-in.component.html',
  styleUrl: './log-in.component.css'
})
export class LogInComponent {
  username = '';
  password = '';

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

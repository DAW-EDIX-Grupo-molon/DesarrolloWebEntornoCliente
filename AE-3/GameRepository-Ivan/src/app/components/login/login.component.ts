import { Component,OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/entitys/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userId:string=""
  password:string=""

  incorrecto:boolean=true

  listUsers:User[]

  constructor(private _userService:UserService , private router:Router) {
    this.listUsers=_userService.listar()
  }

  login() {
    const validacion = this._userService.login(this.userId,this.password)

    if (validacion) {
      this.incorrecto=true
      this.router.navigate(["/biblioteca"])
    } else {
      this.incorrecto=false
      this.router.navigate([""])
    }

  }

  ngOnInit(): void {
  }

}

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

  /**
   * Al ejecutar la función almacenará en una constante el valor pasado por la finción própia de la clase UserService, la cual validará el usuario pasado.
   * Después ejecuta una if el cual nos direcciona a una ruta para cargar el componente biblioteca o en su defecto volveremos al login.
   */
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

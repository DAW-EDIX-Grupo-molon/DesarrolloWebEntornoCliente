import { Injectable } from '@angular/core';
import { User } from '../entitys/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private listUsers:User[] = []

  usuarioValido=false

  constructor() {

    let user:User

    user = new User()
    user.userMail="felix.jugon@gmail.com"
    user.userName="felixJugonMaster"
    user.password="felix1234"
    user.access=true
    this.listUsers.push(user)

    user = new User()
    user.userMail="laura@gmail.com"
    user.userName="EAF-Laura"
    user.password="laura1234"
    user.access=false
    this.listUsers.push(user)

    user = new User()
    user.userMail="cris@gmail.com"
    user.userName="CrisTechPro"
    user.password="cris1234"
    user.access=false
    this.listUsers.push(user)

    user = new User()
    user.userMail="luxmy@gmail.com"
    user.userName="TeMiroYTeReviento"
    user.password="luxmy1234"
    user.access=false
    this.listUsers.push(user)

    user = new User()
    user.userMail="ivan@gmail.com"
    user.userName="elManco"
    user.password="ivan1234"
    user.access=false
    this.listUsers.push(user)

  }

  listar():User[] {
    return this.listUsers;
  }

  buscarUser(userMail:string):User|null {
    for (let user of this.listUsers) {
      if (user.userMail==userMail) {
        return user
      }
    }
    return null
  }

  login(userId:string , password:string): boolean {

    for (let user of this.listUsers) {
      if (user.userMail === userId || user.userName === userId) {
        if (user.password === password) {
          if (user.access === true) {
            this.usuarioValido = true;
          } else {
            userId = "";
            password = "";
            alert("Error: Acceso denegado");
            this.usuarioValido = false;
          }
        } else {
          userId = "";
          password = "";
          alert("Error: Contraseña incorrecta");
          this.usuarioValido = false;  
        }
      }
    }
    return this.usuarioValido;
    
  }

  logout() {
    window.location.reload();
    return false
  }

  ngOnInit(): void {
  }

}

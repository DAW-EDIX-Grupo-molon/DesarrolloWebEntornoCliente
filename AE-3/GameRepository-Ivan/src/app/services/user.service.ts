import { Injectable } from '@angular/core';
import { User } from '../entitys/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private listUsers:User[] = []

  usuarioValido=false

  /**
   * Inicializaremos una variable user:User, para alimentar dicha variable de datos y posteriormente cargarlos en una lista a modo de BBDD.
   */
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

  /**
   * Retorna la listaUsers, con los usuarios cargamos para su utilización.
   * @returns User[]
   */
  listar():User[] {
    return this.listUsers;
  }

  /**
   * Recorremos la lista de usuarios introducido y la cotejamos con el userMail pasado, si hay coincidencia devolvemos el user sino null
   * @param userMail:string 
   * @returns User | null
   */
  buscarUser(userMail:string):User|null {
    for (let user of this.listUsers) {
      if (user.userMail==userMail) {
        return user
      }
    }
    return null
  }

  /**
   * Lógica de login para acceder a la aplicación, en la que se recorre la lista y se comparan el userId y password con las de la lista, para simular que cada user tiene su biblioteca se le ha dado un atributo acceso, el cual solamente permite a uno acceder.
   * @param userId : string
   * @param password : string
   * @returns boolean
   */
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

  ngOnInit(): void {
  }

}

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
  private usuarios = [
    { username: 'usuario1', password: 'contraseña1' },
    { username: 'usuario2', password: 'contraseña2' }
  ];

  login(username: string, password: string): boolean {
    const usuarioEncontrado = this.usuarios.find(
      user => user.username === username && user.password === password
    );
    if (usuarioEncontrado) {
      localStorage.setItem('usuarioLogueado', JSON.stringify(usuarioEncontrado));
      return true;
    }
    return false;
  }

  estaLogueado(): boolean {
    return !!localStorage.getItem('usuarioLogueado');
  }
}
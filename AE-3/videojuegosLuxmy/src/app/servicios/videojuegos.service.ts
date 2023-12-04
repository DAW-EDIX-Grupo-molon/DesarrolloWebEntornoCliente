import { Injectable } from '@angular/core';
import { Videojuego } from '../models/videojuegos.model';

@Injectable({
  providedIn: 'root'
})
export class VideojuegoService {

  private videojuegoID: number = 1;
  private videojuegos: Videojuego[] = [];

  constructor() {
    this.inicializarVideojuegos();
  }

  private inicializarVideojuegos(): void {
    this.agregarVideojuego(new Videojuego(1, 'Resident Evil 3', 'Capcom', 'assets/imagenes/residentevil.jpg', 3.5));
    this.agregarVideojuego(new Videojuego(2, 'Call of Duty: Modern Warfare', 'ACTIVISION', 'assets/imagenes/callofduty.jpg', 4.6));
    this.agregarVideojuego(new Videojuego(3, 'Last Of Us II', 'Naughty Dog', 'assets/imagenes/lastofus.jpg', 3.1));
  }

  private agregarVideojuego(videojuego: Videojuego): void {
    this.videojuegos.push(videojuego);
  }

  listar(): Videojuego[] {
    return this.videojuegos;
  }

  buscarPorId(id: number): Videojuego | null {
    for (let i = 0; i < this.videojuegos.length; i++) {
      if (this.videojuegos[i].id === id) {
        console.log("Juego encontrado:");
        console.log(this.videojuegos[i]);
        return this.videojuegos[i];
      }
    }
    console.log("Juego no encontrado");
    return null;
  }
}
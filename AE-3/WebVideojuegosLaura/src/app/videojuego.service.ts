import { Injectable } from '@angular/core';
import { Videojuego } from './videojuego.model';

@Injectable({
  providedIn: 'root',
})
export class VideojuegoService {
  private videojuegos: Videojuego[] = [
    // Aquí puedes agregar algunos videojuegos iniciales
    {
      id: 1,
      titulo: 'League of Lengends',
      compania: 'Riot Games',
      imagen: 'url_de_la_imagen_1',
      valoracionMedia: 2.5,
    },
    {
      id: 2,
      titulo: 'Evil Dead',
      compania: 'Renaissance Pictures',
      imagen: 'url_de_la_imagen_2',
      valoracionMedia: 3.8,
    },
  ];

  getVideojuegos(): Videojuego[] {
    return this.videojuegos;
  }

  getVideojuegoById(id: number): Videojuego {
    return this.videojuegos.find((v) => v!.id === id) as Videojuego;
  }
}
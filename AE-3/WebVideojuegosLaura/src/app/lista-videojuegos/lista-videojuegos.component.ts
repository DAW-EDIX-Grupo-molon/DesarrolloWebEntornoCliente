import { Component, OnInit } from '@angular/core';
import { Videojuego } from '../videojuego.model';
import { VideojuegoService } from '../videojuego.service';

@Component({
  selector: 'app-lista-videojuegos',
  templateUrl: './lista-videojuegos.component.html',
  styleUrls: ['./lista-videojuegos.component.css'],
})
export class ListaVideojuegosComponent implements OnInit {
  videojuegos!: Videojuego[];

  constructor(private videojuegoService: VideojuegoService) {}

  ngOnInit(): void {
    this.videojuegos = this.videojuegoService.getVideojuegos();
  }
}
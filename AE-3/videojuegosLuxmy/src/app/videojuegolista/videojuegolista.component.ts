import { Component, OnInit } from '@angular/core';
import { Videojuego } from 'src/app/models/videojuegos.model';
import { VideojuegoService } from 'src/app/servicios/videojuegos.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-videojuegolista',
  templateUrl: './videojuegolista.component.html',
  styleUrls: ['./videojuegolista.component.css']
})
export class VideojuegolistaComponent implements OnInit {

  listaVideojuegos: Videojuego[] = [];

  constructor(private videojuegoService: VideojuegoService, private router: Router) {}

  ngOnInit(): void {
    this.listaVideojuegos = this.videojuegoService.listar();
  }
}

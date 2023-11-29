import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Videojuego } from '../videojuego.model';
import { VideojuegoService } from '../videojuego.service';

@Component({
  selector: 'app-detalle-videojuego',
  templateUrl: './detalle-videojuego.component.html',
  styleUrls: ['./detalle-videojuego.component.css'],
})
export class DetalleVideojuegoComponent implements OnInit {
  videojuego!: Videojuego;

  constructor(
    private route: ActivatedRoute,
    private videojuegoService: VideojuegoService
  ) {}

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id')!;
    this.videojuego = this.videojuegoService.getVideojuegoById(id);
  }
}

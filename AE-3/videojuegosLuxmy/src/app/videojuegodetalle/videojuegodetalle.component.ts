import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Videojuego } from 'src/app/models/videojuegos.model';
import { VideojuegoService } from 'src/app/servicios/videojuegos.service';

@Component({
  selector: 'app-videojuegodetalle',
  templateUrl: './videojuegodetalle.component.html',
  styleUrls: ['./videojuegodetalle.component.css']
})
export class VideojuegodetalleComponent implements OnInit {
 
  videojuego: Videojuego | null = null;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private videojuegoService: VideojuegoService
  ) { }

  ngOnInit(): void {
    this.obtenerDetalleJuego();
  }

  obtenerDetalleJuego(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.videojuego = this.videojuegoService.buscarPorId(id);
  }

  volver(): void {
    this.router.navigate(['/catalogo']);
  }
}
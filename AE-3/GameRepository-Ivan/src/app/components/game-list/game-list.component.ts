import { Component,Input, OnInit } from '@angular/core';
import { Game } from 'src/app/entitys/game';
import { GameService } from 'src/app/services/game.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.css']
})
export class GameListComponent implements OnInit {

  listaGames : Game[] = []

  constructor(private _gameService:GameService , private router:Router) {
    this._gameService=_gameService
    this.listaGames=_gameService.listar()
  }

  public routerDetalle() {
  }

  ngOnInit(): void {
  }

}

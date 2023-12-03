import { Injectable } from '@angular/core';
import { Game } from '../entitys/game';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  private contadorId : number = 1;
  private listGames:Game[] = []

  constructor () {

    let game:Game

    game = new Game()
    game.idGame=this.contadorId++
    game.titulo='The Legend of Zelda: Breath of the Wild'
    game.companyia='Nintendo'
    game.imagen='zeldaBW.jpg'
    game.valoracion=4.9
    this.listGames.push(game)

    game = new Game()
    game.idGame=this.contadorId++
    game.titulo='Cyberpunk 2077'
    game.companyia='CD Projekt'
    game.imagen='cyberpunk.jpg'
    game.valoracion=3.7
    this.listGames.push(game)

    game = new Game()
    game.idGame=this.contadorId++
    game.titulo='Red Dead Redemption 2'
    game.companyia='Rockstar Games'
    game.imagen='reddead2.jpg'
    game.valoracion=4.8
    this.listGames.push(game)

  }

  listar():Game[] {
    return this.listGames;
  }

  buscarPorId (id:number):Game | null {
    for (let game of this.listGames) {
      if(game.idGame==id){
        console.log("Buscando el juego")
        console.log(game)
        return game  
      }
    }
    return null
  }

  ngOnInit() {

  }
  
}

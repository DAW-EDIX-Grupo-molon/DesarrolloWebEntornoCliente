import { Injectable } from '@angular/core';
import { Game } from '../entitys/game';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  private contadorId : number = 1;
  private listGames:Game[] = []

  /**
   * Monta 3 objetos de tipo Game y los añade a la lista listGames, a modo de simulación de BBDD.
   */
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

  /**
   * Método que devuelve la listGames para poder trabajar con ella.
   * @returns Game[]
   */
  listar():Game[] {
    return this.listGames;
  }

  /**
   * Recorre la lista listGames la cual contiene los objetos Game y compara el id pasado con el de los objetos, si hay una coincidencia devuelve dicho objeto y sino devuelve null.
   * @param id : number
   * @returns Game | null
   */
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

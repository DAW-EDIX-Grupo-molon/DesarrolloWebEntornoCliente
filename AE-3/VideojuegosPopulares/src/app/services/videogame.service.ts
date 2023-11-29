import { Injectable } from '@angular/core';
import { VideoGame } from '../entities/VideoGame';

@Injectable({
  providedIn: 'root'
})
export class VideoGameService {

private videoGames = [
  new VideoGame(1, "World of Warcraft", "Blizzard", "myurl.wow", 8),
  new VideoGame(2, "Spiderman", "Sony", "myurl.spiderman", 10)
]

  constructor() { }

  getAllGames():VideoGame[]{
    return this.videoGames
  }

  getById(id: number): VideoGame | undefined {
    return this.videoGames.find((videoGame) => videoGame.id == id)
  }

}

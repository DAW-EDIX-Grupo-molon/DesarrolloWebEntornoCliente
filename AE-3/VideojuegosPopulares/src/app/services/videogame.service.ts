import { Injectable } from '@angular/core';
import { VideoGame } from '../entities/VideoGame';

@Injectable({
  providedIn: 'root'
})
export class VideoGameService {

  constructor() { }

  getAllGames():VideoGame[]{
    return [
      new VideoGame("World of Warcraft", "Blizzard", "myurl.wow", 8),
      new VideoGame("Spiderman", "Sony", "myurl.spiderman", 10)
    ]
  }
}

import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VideoGame } from '../../entities/VideoGame';
import { VideoGameService } from '../../services/videogame.service';

@Component({
  selector: 'app-read-all',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './read-all.component.html',
  styleUrl: './read-all.component.css'
})
export class ReadAllComponent {

  constructor(private videoGamesService : VideoGameService){}
  gamesList : VideoGame[] = this.videoGamesService.getAllGames();

}

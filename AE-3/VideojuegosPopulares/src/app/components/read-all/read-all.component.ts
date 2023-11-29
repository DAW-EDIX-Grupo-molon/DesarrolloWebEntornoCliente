import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VideoGame } from '../../entities/VideoGame';
import { VideoGameService } from '../../services/videogame.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-read-all',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './read-all.component.html',
  styleUrl: './read-all.component.css'
})
export class ReadAllComponent {

  constructor(private videoGamesService : VideoGameService, private router: Router){}
  gamesList : VideoGame[] = this.videoGamesService.getAllGames();

  public selectElement(videoGame:VideoGame) : void{
    console.log("Seleccionando...")

    let id = videoGame.id;

    this.router.navigate(["/detail", id])
  }

}

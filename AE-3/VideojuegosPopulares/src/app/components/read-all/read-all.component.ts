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
export class ReadAllComponent implements OnInit {

  constructor(private videoGamesService: VideoGameService, private router: Router) { }

  gamesList: VideoGame[] = [];

  public selectElement(videoGame: VideoGame): void {
    let id = videoGame.id;

    this.router.navigate(["/detail", id])
  }

  ngOnInit(): void {
    this.videoGamesService.getAllGames().subscribe(
      (videgoGames) => this.gamesList = videgoGames
    )
  }

}

import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { VideoGameService } from '../../services/videogame.service';
import { VideoGame } from '../../entities/VideoGame';

@Component({
  selector: 'app-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.css'
})
export class DetailComponent implements OnInit{

  id :number
  videoGame: VideoGame | undefined
  
  constructor(route : ActivatedRoute, private videoGameService:VideoGameService, private router: Router) { 
    this.id = route.snapshot.params["id"]
  }
  ngOnInit(): void {
    this.videoGameService.getById(this.id).subscribe((videoGame) => this.videoGame = videoGame)
  }
  goBack(){
    this.router.navigate(['/list']);
  }
}

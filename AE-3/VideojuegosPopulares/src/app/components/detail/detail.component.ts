import { Component } from '@angular/core';
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
export class DetailComponent {

  videoGame: VideoGame | undefined
  
  constructor(route : ActivatedRoute, private videoGameService:VideoGameService, private router: Router) { 
    this.videoGame = this.videoGameService.getById(route.snapshot.params["id"])
  }
  goBack(){
    this.router.navigate(['/list']);
  }
}

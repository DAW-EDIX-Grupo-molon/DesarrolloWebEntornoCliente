import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Game } from 'src/app/entitys/game';
import { GameService } from 'src/app/services/game.service';

@Component({
  selector: 'app-game-detail',
  templateUrl: './game-detail.component.html',
  styleUrls: ['./game-detail.component.css']
})
export class GameDetailComponent implements OnInit {

  game:Game|null
  

  constructor(private route : ActivatedRoute , private gameService:GameService) {

    console.log(this.route.snapshot.params['idGame'])

    this.game = this.gameService.buscarPorId(parseInt(this.route.snapshot.params['idGame']))
    console.log(this.game)

  }

  ngOnInit(): void {

  }

}

import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VideoGame } from '../../entities/VideoGame';

@Component({
  selector: 'app-read-all',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './read-all.component.html',
  styleUrl: './read-all.component.css'
})
export class ReadAllComponent implements OnInit{

  gamesList : VideoGame[] = [];
  


  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

}

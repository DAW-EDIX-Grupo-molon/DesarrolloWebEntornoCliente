import { Injectable } from '@angular/core';
import { VideoGame } from '../entities/VideoGame';
import { HttpClient } from '@angular/common/http';
import { Observable, map, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VideoGameService {

private sourceUrl = "assets/videoGames.json";

  constructor(private http: HttpClient) { }

  getAllGames():Observable<VideoGame[]>{
     return this.http.get<VideoGame[]>(this.sourceUrl);
  }

  getById(id: number):Observable<VideoGame>{
    return this.getAllGames().pipe(map(videoGames => videoGames.find(videoGame => videoGame.id == id)!))
 }

}

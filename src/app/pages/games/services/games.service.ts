import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GamesService {
  
  public gamesURL: string = 'https://www.freetogame.com/api/games';
  public gamesOneURL: string = 'https://www.freetogame.com/api/game?id=';
  constructor(private httpClient: HttpClient) { }

  public getAllGames() {
    return this.httpClient.get(this.gamesURL)
  }
  public getGame(idCharacter: any) {
    console.log(idCharacter)
    return this.httpClient.get(`${this.gamesOneURL}${idCharacter}`)
  }
}

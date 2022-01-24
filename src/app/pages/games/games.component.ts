import { GamesService } from './services/games.service';
import { GamesInterface } from './models/games';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.scss']
})
export class GamesComponent implements OnInit {

  public games: GamesInterface[] = [];

  constructor(private gamesService: GamesService) { }

  ngOnInit(): void {
    this.gamesService.getAllGames().subscribe((data: any) => {
      
      const apiResults: GamesInterface[] = data;

      const formattedGames = apiResults.map(({id, title, thumbnail, shortDescription, gameUrl, genre, platform, publisher, developer, releaseDate}) => ({
        id, title, thumbnail, shortDescription, gameUrl, genre, platform, publisher, developer, releaseDate
      }));

      this.games = formattedGames;
      return formattedGames;
    })
  }
  public sortGamesByTitle() {
    this.games.sort((a,b) => a.title.localeCompare(b.title));
  }
  public reset() {
    this.games.sort((a, b) => a.id - b.id);
  }
}

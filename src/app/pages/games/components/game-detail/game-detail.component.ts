import { GamesInterface } from '../../models/games';
import { GamesService } from '../../services/games.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-game-detail',
  templateUrl: './game-detail.component.html',
  styleUrls: ['./game-detail.component.scss']
})
export class GameDetailComponent implements OnInit {
  public game!: GamesInterface;

  constructor(private activatedRoute: ActivatedRoute, private gamesService: GamesService) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((params) => {
      console.log(params);
      const idCharacter = params.get('idCharacter');
      console.log(idCharacter)
      this.gamesService.getGame(idCharacter).subscribe((data: any) => {
        const apiResult: GamesInterface = data;
        this.game = apiResult;
        console.log("Game", this.game)
      })
    })
  }

}

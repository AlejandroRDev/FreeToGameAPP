import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { GamesRoutingModule } from './games-routing.module';
import { GamesComponent } from './games.component';
import { GameDetailComponent } from './components/game-detail/game-detail.component';


@NgModule({
  declarations: [
    GamesComponent,
    GameDetailComponent
  ],
  imports: [
    CommonModule,
    GamesRoutingModule, 
    HttpClientModule
  ]
})
export class GamesModule { }

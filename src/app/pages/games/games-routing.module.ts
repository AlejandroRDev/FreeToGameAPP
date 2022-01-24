import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GamesComponent } from './games.component';
import { GameDetailComponent } from './components/game-detail/game-detail.component';
const routes: Routes = [
  {path: "", component: GamesComponent },
  {path: ":idCharacter", component: GameDetailComponent}
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GamesRoutingModule { }

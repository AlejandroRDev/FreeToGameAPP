import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: `home`, loadChildren: () =>
      import('./pages/home/home.module').then(m => m.HomeModule)
  },
  {
    path: `about`, loadChildren: () =>
      import('./pages/about/about.module').then(m => m.AboutModule)
  },
  {
    path: `games`, loadChildren: () =>
      import('./pages/games/games.module').then(m => m.GamesModule)
  },
  {
    path: `register`, loadChildren: () =>
      import('./pages/register/register.module').then(m => m.RegisterModule)
  },
  { path: ``, redirectTo: `home`, pathMatch: `full` }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

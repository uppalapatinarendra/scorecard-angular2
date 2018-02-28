import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PlayersComponent } from './players.component';
import { PlayerStartComponent } from './player-start/player-start.component';
import { PlayerEditComponent } from './player-edit/player-edit.component';
import { PlayerDetailsComponent } from './player-details/player-details.component';
import { AuthGuard } from '../auth/auth-guard-service';

const playersRoutes: Routes = [
  { path: '', component: PlayersComponent, children: [
    { path: '', component: PlayerStartComponent },
    { path: 'new', component: PlayerEditComponent, canActivate: [AuthGuard] },
    { path: ':id', component: PlayerDetailsComponent },
    { path: ':id/edit', component: PlayerEditComponent, canActivate: [AuthGuard] },
  ] },
];

@NgModule({
  imports: [
    RouterModule.forChild(playersRoutes)
  ],
  exports: [RouterModule],
  providers: [
    AuthGuard
  ]
})
export class PlayersRoutingModule {}

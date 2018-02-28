import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


import { SharedModule } from '../shared/shared.module';
import { PlayersComponent } from './players.component';
import { PlayerStartComponent } from './player-start/player-start.component';
import { PlayerListComponent } from './player-list/player-list.component';
import { PlayerEditComponent } from './player-edit/player-edit.component';
import { PlayerDetailsComponent } from './player-details/player-details.component';
import { PlayerComponent } from './player-list/player/player.component';
import { PlayersRoutingModule } from './players-routing.module';

@NgModule({
  declarations: [
    PlayersComponent,
    PlayerStartComponent,
    PlayerListComponent,
    PlayerEditComponent,
    PlayerDetailsComponent,
    PlayerComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    PlayersRoutingModule,
    SharedModule
  ]
})
export class PlayersModule {}

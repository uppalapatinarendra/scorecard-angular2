import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

import { List } from '../shared/list-model';
import { Player } from './player.model';
import { Http, Response, Headers, RequestOptions } from '@angular/http';



@Injectable()
export class PlayerService {
  playersChanged = new Subject<Player[]>();

  players: Player[]=[
    
  ];
  

  constructor() {}

  setPlayers(players: Player[]) {
    this.players = players;
    this.playersChanged.next(this.players.slice());
  }

  getPlayers() {
    return this.players.slice();
  }

  getPlayer(index: number) {
    return this.players[index];
  }


  addPlayer(player: Player) {
    this.players.push(player);
    this.playersChanged.next(this.players.slice());
  }

  updatePlayer(index: number, newPlayer: Player) {
    this.players[index] = newPlayer;
    this.playersChanged.next(this.players.slice());
  }

  deletePlayer(index: number) {
    this.players.splice(index, 1);
    this.playersChanged.next(this.players.slice());
  }

}
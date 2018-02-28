import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/Rx';


import { AuthService } from '../auth/auth.service';
import { PlayerService } from '../players/player.service';
import { Player } from '../players/player.model';

@Injectable()
export class DataStorageService {
  constructor(private http: Http,
              private playerService: PlayerService,
              private authService: AuthService) {
  }

  storePlayers() {
    const token = this.authService.getToken();

    return this.http.put('https://mainscorecard.firebaseio.com/players.json?auth=' + token, this.playerService.getPlayers());
  }
  getPlayers() {
    const token = this.authService.getToken();

    this.http.get('https://mainscorecard.firebaseio.com/players.json?auth=' + token)
      .map(
        (response: Response) => {
          const players: Player[] = response.json();  
          for (let player of players) {
            if (!player['lists']) {
              player['lists'] = [];
            }
          }
          return players;
        }
      )
      .subscribe(
        (players: Player[]) => {
          this.playerService.setPlayers(players);
        }
      );
  }
  
}

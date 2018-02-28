import { Component, OnInit, OnDestroy} from '@angular/core';
import { Player } from '../player.model';
import { Subscription } from 'rxjs/Subscription';
import { PlayerService } from '../player.service';
import { Router, ActivatedRoute } from '@angular/router';
import { DataStorageService } from '../../shared/data-storage.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';
import { Subject } from 'rxjs/Subject';

@Component({
  selector: 'app-player-list',
  templateUrl: './player-list.component.html',
  styleUrls: ['./player-list.component.css']
})
export class PlayerListComponent implements OnInit, OnDestroy {

  subscription: Subscription;
  players:Array<Player>=[];

  constructor(private playerService: PlayerService,
              private router: Router,
              private route: ActivatedRoute,
            private dataStorage: DataStorageService) {
  }

  ngOnInit() {
    this.subscription = this.playerService.playersChanged
      .subscribe(
        (players: Player[]) => {
          this.players = players;
        }
      );
    this.players = this.playerService.getPlayers();
  }

  onNewPlayer() {
    this.router.navigate(['new'], {relativeTo: this.route});
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
  getAllPlayers(){
    let players=this.dataStorage.getPlayers()
      
   }
 

}

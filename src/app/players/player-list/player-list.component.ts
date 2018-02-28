import { Component, OnInit, OnDestroy} from '@angular/core';
import { Player } from '../player.model';
import { Subscription } from 'rxjs/Subscription';
import { PlayerService } from '../player.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-player-list',
  templateUrl: './player-list.component.html',
  styleUrls: ['./player-list.component.css']
})
export class PlayerListComponent implements OnInit, OnDestroy {
  players: Player[];
  subscription: Subscription;

  constructor(private playerService: PlayerService,
              private router: Router,
              private route: ActivatedRoute) {
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

}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Player } from '../player.model';
import { PlayerService } from '../player.service';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-player-details',
  templateUrl: './player-details.component.html',
  styleUrls: ['./player-details.component.css']
})
export class PlayerDetailsComponent implements OnInit {
  isAuthenticated: false;
  player: Player;
  id: number;

  constructor(private playerService: PlayerService,
              private route: ActivatedRoute,
              private router: Router, private authService: AuthService) {
  }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
          this.player = this.playerService.getPlayer(this.id);
        }
      );
  }


  onEditPlayer() {
    this.router.navigate(['edit'], {relativeTo: this.route});
    // this.router.navigate(['../', this.id, 'edit'], {relativeTo: this.route});
  }

  onDeletePlayer() {
      this.playerService.deletePlayer(this.id);
      this.router.navigate(['/players']);

    
  }

}

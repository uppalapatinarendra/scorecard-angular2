import { Component, OnInit } from '@angular/core';
import { FormGroup, FormArray, FormControl } from '@angular/forms';
import { PlayerService } from '../player.service';
import { ActivatedRoute,Router, Params } from '@angular/router';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-player-edit',
  templateUrl: './player-edit.component.html',
  styleUrls: ['./player-edit.component.css']
})
export class PlayerEditComponent implements OnInit {
 

  public total: number;
  public points: number;
 
  percent = '';
  id: number;
  editMode = false;
  playerForm: FormGroup;
  
  
  constructor(
    private route: ActivatedRoute,
              private playerService: PlayerService,
              private router: Router) {

  }

  ngOnInit() {

    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
          this.editMode = params['id'] != null;
          this.initForm();
        }
      );
  }


  onChange(){
  console.log(this.points);
     console.log(this.total);
    
      switch(true) {
        
        case (this.points > 0 && this.points < 50):
          this.points = this.points + (25 / 100 * this.total);
          this.percent = "25%";
        break;
        case this.points < 0:
          this.points = this.points + this.total;
          this.percent = "0%";
        break;
        default:
          console.log("error");
  
      }
        this.total = 0;
  }

  onSubmit() {
    if (this.editMode) {
      this.playerService.updatePlayer(this.id, this.playerForm.value);
    } else {
      this.playerService.addPlayer(this.playerForm.value);
    }
    this.onCancel();
  }

  onAddList() {
    (<FormArray>this.playerForm.get('lists')).push(
      new FormGroup({
        'name': new FormControl(null, Validators.required),
        'amount': new FormControl(null, [
          Validators.required,
          Validators.pattern(/^[1-9]+[0-9]*$/)
        ])
      })
    );
  }

  onDeleteList(index: number) {
    (<FormArray>this.playerForm.get('lists')).removeAt(index);
  }

  onCancel() {
    this.router.navigate(['../'], {relativeTo: this.route});
  }


  

  private initForm() {
    let playerName = '';
    let playerImagePath = '';
    let playerDescription = '';
    let playerPoints = '';
    let playerTotal = '';
    let playerLists = new FormArray([]);

    if (this.editMode) {
      const player = this.playerService.getPlayer(this.id);
      playerName = player.name;
      playerImagePath = player.imagePath;
      playerDescription = player.description;
      playerPoints = player.points;
      playerTotal = player.total;
      if (player['lists']) {
        for (let list of player.lists) {
          playerLists.push(
            new FormGroup({
              'name': new FormControl(list.name, Validators.required),
              'amount': new FormControl(list.amount, [
                Validators.required,
                Validators.pattern(/^-?(0|[1-9]\d*)(\.\d+)?$/)
              ])
            })
          );
        }
      }
    }

    this.playerForm = new FormGroup({
      'name': new FormControl(playerName, Validators.required),
      'imagePath': new FormControl(playerImagePath, Validators.required),
      'description': new FormControl(playerDescription, Validators.required),
      'points': new FormControl(playerPoints, Validators.required),
      'total': new FormControl(playerTotal, Validators.required),
      'lists': playerLists
    });
  }

}

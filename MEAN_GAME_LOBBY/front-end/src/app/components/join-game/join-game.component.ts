import { Component, OnInit } from "@angular/core";
import { MatDialogRef } from "@angular/material";
import { GameService } from "../../services/game.service";
import { PlayerService } from "../../services/player.service";
import { Player } from "../../schema/player";
import { Game } from "../../schema/game";
import { MAT_DIALOG_DATA } from "@angular/material";
import { Inject } from "@angular/core";
import { ShareService } from "../../services/share.service";
import { FormGroup, FormBuilder, Validators, FormArray } from "@angular/forms";

@Component({
  selector: "app-join-game",
  templateUrl: "./join-game.component.html",
  styleUrls: ["./join-game.component.css"]
})
export class JoinGameComponent implements OnInit {
  playerForm: FormGroup;
  gameForm : FormGroup;
  private player: Player[];
  game: any = [];
  game_choice : boolean  ;

  //selected game perfered
  game_perfered: string = "";

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private player_service: PlayerService,
    private game_service: GameService,
    public dialogRef: MatDialogRef<JoinGameComponent>,
    public fb: FormBuilder
  ) {
    console.log(this.data.id);
    this.player_service.getPlayer(this.data.id).subscribe(info => {
      this.playerForm = this.fb.group({
        player_name: [info.player, [Validators.required]],
        rank: [info.rank, [Validators.required]],
        score: [info.score, [Validators.required]],
        time: [info.time],
        //change for display
        game_history: [info.game_history, [Validators.required]],
        favorite: [info.favorite],
        status: [info.status, [Validators.required]],
        joinable: [info.joinable, [Validators.required]],
      });
    });
  }

  ngOnInit() {
    this.game_service.getGames().subscribe(res => {
      this.game = res;
      console.log(this.game);
    });
    this.playerForm = this.fb.group({
      player_name: ["", [Validators.required]],
      rank: ["", [Validators.required]],
      score: ["", [Validators.required]],
      time: ["", [Validators.required]],
      game_history: [this.fb.array([]), [Validators.required]],
      favorite: ["", [Validators.required]],
      status: ["", [Validators.required]],
      joinable: ["", [Validators.required]],
    });
  }

  selected_game(title : string) {    
      console.log(`You have selected ${title} as your perfered game to play`);
      this.game_perfered = title;
      this.game_choice = true;
      console.log(this.game_choice);
  }

  join_game() {
      console.log("Validation completed")
      this.playerForm.value.status = "unavaliable";
      this.playerForm.value.joinable = "unable";
      this.playerForm.value.game_history.push(this.game_perfered);
      this.player_service
        .UpdatePlayer(this.data.id, this.playerForm.value)
        .subscribe();
      this.dialogRef.close();
  
  }
  cancel() {
    this.dialogRef.close();
  }
}

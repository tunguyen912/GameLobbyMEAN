import { Component, OnInit, NgZone } from "@angular/core";
import { MatDialogRef } from "@angular/material";
import { GameService } from "../../services/game.service";
import { PlayerService } from "../../services/player.service";
import { Player } from "../../schema/player";
import { Game } from "../../schema/game";
import { MAT_DIALOG_DATA } from "@angular/material";
import { Inject } from "@angular/core";
import { ShareService } from "../../services/share.service";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: "app-add-player",
  templateUrl: "./add-player.component.html",
  styleUrls: ["./add-player.component.css"]
})
export class AddPlayerComponent implements OnInit {
  GameData: any = [];
  RankList : string[];
  private avaliable: string[];
  playerForm: FormGroup;

  //selected game perfered
  game_perfered: string = "";
  index ;
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public fb: FormBuilder,
    private player_service: PlayerService,
    private game_service: GameService,
    public dialogRef: MatDialogRef<AddPlayerComponent>,
    public share : ShareService
  ) {

  }

  ngOnInit() {
    this.game_service.getGames().subscribe((res)=>{
      this.GameData = res
      console.log(this.GameData)
    });
    this.RankList = this.share.RankList;
    this.avaliable = ["avaliable", "unavaliable"];
    this.playerForm = this.fb.group({
      player: ["", [Validators.required,Validators.minLength(4), Validators.pattern(/^[A-Za-z]+(?:[ ][A-Za-z]+)*$/) ]],
      rank: ["", Validators.required],
      score: ["", [Validators.required,Validators.maxLength(20),Validators.pattern(/^-?(0|[1-9]\d*)?$/)]],
      time: ["", [Validators.required, Validators.pattern(/^[A-Za-z0-9]+(?:[ ][A-Za-z0-9]+)*$/)]],
      favorite: ["", [Validators.required]],
      status: ["avaliable", [Validators.required]],
      joinable: ["join game", [Validators.required]]
    });
  }
  get player() {
    return this.playerForm.get("player");
  }
  get score() {
    return this.playerForm.get("score");
  }

  get time() {
    return this.playerForm.get("time");
  }

  selected_game(title: string) {
    console.log(`You have selected ${title} as your perfered game to play`);
    this.game_perfered = title;
  }

  // COMMIT TO ADDING A NEW PLAYER
  commit() {
    this.player_service.AddPlayer(this.playerForm.value).subscribe(() => {
      console.log("ADDED A NEW PLAYER TO THE LOBBY");
    });
    console.log("Added new player");
    this.dialogRef.close();
  }

  cancel() {
    this.dialogRef.close();
  }

  select_rank(i){
    console.log(i)
    this.index = i;
    
  }
  select_avaliable(status: string) {
    console.log(status);
  }
}

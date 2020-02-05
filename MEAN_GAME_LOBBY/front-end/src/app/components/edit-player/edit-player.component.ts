import { Component, OnInit } from "@angular/core";
import { MatDialogRef } from "@angular/material";
import { GameService } from "../../services/game.service";
import { PlayerService } from "../../services/player.service";
import { Player } from "../../schema/player";
import { Game } from "../../schema/game";
import { MAT_DIALOG_DATA } from "@angular/material";
import { Inject } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { ShareService } from "../../services/share.service";
@Component({
  selector: "app-edit-player",
  templateUrl: "./edit-player.component.html",
  styleUrls: ["./edit-player.component.css"]
})
export class EditPlayerComponent implements OnInit {
  playerForm: FormGroup;
  rank_setting : any = ["Copper" , "Silver" , "Gold" , "Platium" , "Dimond" , " Crystal" , "Master" , "Grand Master" , "Galaxy" , "Top 500"]
  game: any = [];
  private avaliable: string[];

  
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private player_service: PlayerService,
    private game_service: GameService,
    public dialogRef: MatDialogRef<EditPlayerComponent>,
    public fb: FormBuilder
  ) {
    console.log(this.data.id);
    // SETTING THE PREFIX VALUE
    this.player_service.getPlayer(this.data.id).subscribe(data => {
      this.playerForm = this.fb.group({
        
        player: [data.player, [Validators.required,Validators.minLength(4),Validators.maxLength(25) , Validators.pattern(/^[A-Za-z]+(?:[ ][A-Za-z]+)*$/)]],
        rank: [data.rank, [Validators.required]],
        score: [data.score, [Validators.required,Validators.pattern(/^-?(0|[1-9]\d*)?$/)]],
        time: [data.time , [Validators.required , Validators.pattern(/^[A-Za-z0-9]+(?:[ ][A-Za-z0-9]+)*$/)]],
        game_history: [data.game_history, [Validators.required]],
        favorite: [data.favorite],
        status: [data.status, [Validators.required]],
        joinable: [data.joinable, [Validators.required]]
        
      });
    });
  }

  ngOnInit() {
    //GET GAME DATDA
    this.game_service.getGames().subscribe((res)=>{
      this.game = res;
      console.log(this.game);
    });

    // STATIC AVALIABLE OPTION
    this.avaliable = ["avaliable", "unavaliable"];

    //INIT THE PLAYER DATA AS ""
    this.playerForm = this.fb.group({
      player: ["", [Validators.required,Validators.minLength(4)]],
      rank: ["", [Validators.required]],
      score: ["", [Validators.required,Validators.pattern(/^-?(0|[1-9]\d*)?$/)]],
      time: ["", [Validators.required , Validators.pattern(/^[a-zA-Z0-9]{1,30}$/)]],
      game_history: ["", [Validators.required]],
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





  //SUBMIT BUTTON PRESSED AND CHANGE STATUS 
  commit() {
    console.log(this.playerForm.value);
    if (this.playerForm.value.status == "avaliable") {
      this.playerForm.value.joinable = "join game";
    } else {
      this.playerForm.value.joinable = "unable";
    }
    const id = this.data.id;
    this.player_service
      .UpdatePlayer(id, this.playerForm.value)
      .subscribe(res => {
        console.log("EDITED");
      });
    this.dialogRef.close();
  }

  //CANCEL 
  cancel() {
    this.dialogRef.close();
  }
}

import { Component, OnInit, ViewChild, Input, Output } from "@angular/core";
import { PlayerService } from "src/app/services/player.service";
import { Player } from "../../schema/player";
import { AddPlayerComponent } from "../add-player/add-player.component";
import {GameListComponent} from "../game-list/game-list.component";
import { EditPlayerComponent } from "../edit-player/edit-player.component";
import { MatPaginator } from "@angular/material/paginator";
import { MatTableDataSource } from "@angular/material/table";
import { MatDialog } from "@angular/material";
import { ShareService } from 'src/app/services/share.service';

@Component({
  selector: "app-admin-screen",
  templateUrl: "./admin-screen.component.html",
  styleUrls: ["./admin-screen.component.css"]
})
export class AdminScreenComponent implements OnInit {
  PlayerData: any = [];
  GamePlayed : string[] = [];

  @Input() admin_authenthication: boolean;
  player_data = this.player_service.getPlayers();
  displayedColumns: string[] = [
    "player",
    "rank",
    "score",
    "time",
    "game_history",
    "favorite",
    "status",
    "update",
    "delete"
  ]; //space freaking sensitivie
  dataSource: MatTableDataSource<Player>;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  constructor(
    private player_service: PlayerService,
    public dialog: MatDialog,
    public share : ShareService
  ) {
    this.player_service.getPlayers().subscribe(data => {
      this.PlayerData = data;
      this.dataSource = new MatTableDataSource<Player>(this.PlayerData);
      setTimeout(() => {
        this.dataSource.paginator = this.paginator;
      }, 0);
    });
  }

  ngOnInit() {
    this.refresh();
    //testing out SCM
  }
  //search function
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }



  //update a player information
  update(id: string, favorite: string, status: string) {
    this.dialog
      .open(EditPlayerComponent, {
        width: "600px",
        height: "620px",
        data: { id: id }
      })
      .afterClosed()
      .subscribe(() => {
        this.refresh();
      });
  }


  //deleting a player 
  delete(index: number, e) {
    if (window.confirm("Are you sure")) {
      this.player_service.DeletePlayer(e._id).subscribe();
      this.dataSource.data.splice(index, 1);
      this.dataSource._updateChangeSubscription();
    }
  }

  //adding new player to the lobby
  add() {
    this.dialog
      .open(AddPlayerComponent, { width: "500px", height: "520px" })
      .afterClosed()
      .subscribe(() => {
        this.refresh();
      });
  }

  // LISTING THE GAME COMPONENT
  show_games(){
    this.dialog.open(GameListComponent,{width : "800px" , height : "520px"})
    
  }


  // getting data everytime this function is hit
  refresh() {
    this.player_service.getPlayers().subscribe(data => {
      this.PlayerData = data;
      this.dataSource = new MatTableDataSource<Player>(this.PlayerData);
      setTimeout(() => {
        this.dataSource.paginator = this.paginator;
      }, 0);
    });
  }
  test(i){
    this.GamePlayed = this.dataSource.data[i].game_history
    console.log(this.GamePlayed)
  }
}

import {
  Component,
  OnInit,
  ViewChild,
  Input,
  ChangeDetectorRef
} from "@angular/core";
import { PlayerService } from "src/app/services/player.service";
import { Player } from "../../schema/player";
import { MatPaginator } from "@angular/material/paginator";
import { MatTableDataSource } from "@angular/material/table";
import { MatDialog } from "@angular/material";
import { JoinGameComponent } from "../join-game/join-game.component";

@Component({
  selector: "app-player-list",
  templateUrl: "./player-list.component.html",
  styleUrls: ["./player-list.component.css"]
})
export class PlayerListComponent implements OnInit {
  PlayerData: any = [];
  GamePlayed : string[] = [];
  @Input() admin_authenthication: boolean;
  // useless
  player_data = this.player_service.getPlayers();
  
  


  displayedColumns: string[] = [
    "player",
    "rank",
    "score",
    "time",
    "game_history",
    "favorite",
    "status",
    "joinable"
  ]; //space freaking sensitivie
  dataSource: MatTableDataSource<Player>;


  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  constructor(
    private player_service: PlayerService,
    public dialog: MatDialog,
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
    
  }

  avaliable_checker(status) {
    if (status == "avaliable") {
      return true;
    } else if (status == "unavaliable") {
      return false;
    }
  }
  test(i){
    this.GamePlayed = this.dataSource.data[i].game_history
    console.log(this.GamePlayed)
  }
  //use modal to go to join game component
  join_game(id: string) {
    this.dialog
      .open(JoinGameComponent, {

        width: "600px",
        height: "550px",
        data: { id: id }
      })
      .afterClosed()
      .subscribe(() => {
        this.refresh();
      });
  }
 

  refresh() {
    this.player_service.getPlayers().subscribe(data => {
      this.PlayerData = data;
      this.dataSource = new MatTableDataSource<Player>(this.PlayerData);
      setTimeout(() => {
        this.dataSource.paginator = this.paginator;
      }, 0);
    });
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}

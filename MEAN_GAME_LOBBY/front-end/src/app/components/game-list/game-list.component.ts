import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from "@angular/material/paginator";
import { MatTableDataSource } from "@angular/material/table";
import { MatDialog } from "@angular/material";
import {GameService} from "../../services/game.service";
import { Game } from "../../schema/game";


@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.css']
})
export class GameListComponent implements OnInit {
  Gamedata: any = [];

  displayedColumns: string[] = [
    "title",
    "platform",
    "genre",
    "rating",
    "publisher",
    "release",
    "status"
  ]; //space freaking sensitivie
  dataSource: MatTableDataSource<Game>;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  constructor( public dialog: MatDialog,public game_service : GameService) { 
    this.game_service.getGames().subscribe(data => {
      this.Gamedata = data;
      this.dataSource = new MatTableDataSource<Game>(this.Gamedata);
      setTimeout(() => {
        this.dataSource.paginator = this.paginator;
      }, 0);
    });
  }

  ngOnInit() {
  }


  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}

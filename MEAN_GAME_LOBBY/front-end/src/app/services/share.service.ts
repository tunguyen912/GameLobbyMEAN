import { Injectable } from "@angular/core";
import { Game } from "../schema/game";
import { Observable, throwError } from "rxjs";
import { catchError, map } from "rxjs/operators";
import { PlayerService } from "./player.service";
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse
} from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class ShareService {

  RankList = ["Copper" , "Silver" , "Gold" , "Platium" , "Dimond" , " Crystal" , "Master" , "Grand Master" , "Galaxy" , "Top 500"]
  loged : boolean = false;
  setTrue(){
    this.loged = true;
  }
  setFalse(){
    this.loged = false;
  }
  
}

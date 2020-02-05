import { Injectable } from "@angular/core";
import { Game } from "../schema/game";
import { Observable, throwError } from "rxjs";
import { catchError, map } from "rxjs/operators";
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse
} from "@angular/common/http";
@Injectable({
  providedIn: "root"
})
export class GameService {
  // game_endpoint: string = "http://localhost:4000/api/game";
  game_endpoint: string = "/api/game";
  headers = new HttpHeaders().set("Content-Type", "application/json");

  constructor(private http: HttpClient) {}



    getGames() {
      return this.http.get(`${this.game_endpoint}`);
    }
}

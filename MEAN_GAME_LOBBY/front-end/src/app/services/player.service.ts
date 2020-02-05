import { Injectable } from "@angular/core";
import { Player } from "../schema/player";
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
export class PlayerService {
  // player_endpoint: string = "http://localhost:4000/api/player";
  player_endpoint : string = "/api/player"
  headers = new HttpHeaders().set("Content-Type", "application/json");

  constructor(private http: HttpClient) {}

  //PLAYER
  // Add PLAYER
  AddPlayer(data: Player): Observable<any> {
    let API_URL = `${this.player_endpoint}/add-player`;
    console.log(API_URL);
    return this.http.post(API_URL, data, { headers: this.headers });
  }

  // Get all students
  getPlayers() {
    return this.http.get(`${this.player_endpoint}`);
  }

  // Get student
  getPlayer(id): Observable<any> {
    let API_URL = `${this.player_endpoint}/get-player/${id}`;
    return this.http.get(API_URL, { headers: this.headers }).pipe(
      map((res: Response) => {
        return res;
      })
    );
  }

  // Update student
  UpdatePlayer(id, data: Player): Observable<any> {
    var API_URL = `${this.player_endpoint}/update-player/${id}`;
    return this.http.post(API_URL, data, { headers: this.headers });
  }

  // Delete student
  DeletePlayer(id): Observable<any> {
    var API_URL = `${this.player_endpoint}/delete-player/${id}`;
    return this.http.delete(API_URL);
  }
}

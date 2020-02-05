import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app-component/app.component';
import { PlayerListComponent } from './components/player-list/player-list.component';
import { JoinGameComponent } from './components/join-game/join-game.component';
import { LoginComponent } from './components/login/login.component';
import { GameListComponent } from './components/game-list/game-list.component';
import { AddPlayerComponent } from './components/add-player/add-player.component';
import { EditPlayerComponent } from './components/edit-player/edit-player.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatDialogModule,MatTabsModule,MatTableModule,MatPaginatorModule,MatSelectModule,MatInputModule } from '@angular/material';
import {PlayerService} from './services/player.service';
import { ShareService } from './services/share.service';
import { GameService } from './services/game.service';
import { AdminScreenComponent } from './components/admin-screen/admin-screen.component';
import { HttpClientModule } from '@angular/common/http';
import { AuthGuard } from "./guards/auth-guard.service";


@NgModule({
  declarations: [
    AppComponent,
    PlayerListComponent,
    JoinGameComponent,
    LoginComponent,
    GameListComponent,
    AddPlayerComponent,
    EditPlayerComponent,
    AdminScreenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDialogModule,    
    FormsModule,                              
    ReactiveFormsModule  ,
    MatTabsModule,
    MatTableModule,
    MatPaginatorModule,
    MatSelectModule,
    MatInputModule,
    HttpClientModule,  
  ],
  entryComponents: [
    //modal components
    LoginComponent,
    JoinGameComponent,
    AddPlayerComponent,
    EditPlayerComponent,
    GameListComponent
  ],
  //service provider
  providers: [PlayerService,ShareService,GameService,AuthGuard  ],
  bootstrap: [AppComponent],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }

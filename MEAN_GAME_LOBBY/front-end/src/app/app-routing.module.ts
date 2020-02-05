import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app-component/app.component';
import {AdminScreenComponent} from './components/admin-screen/admin-screen.component';
import {PlayerListComponent} from './components/player-list/player-list.component';
import { AuthGuard } from "./guards/auth-guard.service";


const routes: Routes = [
  {path: '', pathMatch: 'full',redirectTo:'home'},
  {path : 'home' , component : PlayerListComponent},
  {path : 'admin' , component :AdminScreenComponent, canActivate: [AuthGuard] }
  // { path: '**', component: PageNotFoundComponent }



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

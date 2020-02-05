import { Component } from '@angular/core';
import {MatDialog } from '@angular/material';
import {LoginComponent} from '../components/login/login.component';
import {AdminScreenComponent} from '../components/admin-screen/admin-screen.component'
import { ShareService} from '../services/share.service';
import {Router} from '@angular/router'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  loged : boolean = this.share.loged;
  
  title = 'front-end';
  constructor(public dialog : MatDialog , public share : ShareService , public router : Router) { console.log(`Username : ThanhQuan123  Password : WhoisJoe?1 `)}
  login(): void {
    this.dialog.open(LoginComponent,{width:'500px',height:'450px'}).afterClosed().subscribe(()=>{
      if(this.share.loged == true)
      {
        this.loged = true;
      }
      else{
        console.log("Wrong password or username")
      }
    })
  }

  logout() : void{
    this.share.loged == false
    this.loged = false;
    this.router.navigateByUrl("");
  }

}

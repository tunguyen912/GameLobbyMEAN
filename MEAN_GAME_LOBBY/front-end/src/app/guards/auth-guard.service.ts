import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, Route } from '@angular/router';
import { Observable } from 'rxjs';
import { ShareService } from '../services/share.service';

@Injectable()
export class AuthGuard implements CanActivate {


  constructor(public share : ShareService, private router: Router) {
  }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
   
    if(this.share.loged == true)
    {
      return true;
    }
    else{
      this.router.navigateByUrl("")
      return false;
    }
  }

}
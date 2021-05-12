import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, UrlTree } from '@angular/router';
import { from, Observable } from 'rxjs';
import { AuthenticationService } from './authentication.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationGuard implements CanActivate {
  constructor(private authService: AuthenticationService, private router: Router) {
    
  }

  canActivate(
    next: ActivatedRouteSnapshot, 
    state: RouterStateSnapshot): Observable<boolean> | boolean {
    //console.log(this.authService.bodybot);
    //console.log(localStorage.getItem("cookieLog"));
    if (localStorage.getItem("cookieLog") == "true") {
      console.log("working");
      return true;

    } else {
      this.router.navigate(['sign-in']);
      console.log("redirecting to sign in");
      return false;

    }
  }
}

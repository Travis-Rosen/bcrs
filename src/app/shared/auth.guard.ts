/*
Author: Travis Rosen
Date: 11/28/2021
Title: auth.guard.ts
Description: Authorization file for sign in
*/




import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router, private cookieService: CookieService) {

  }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const isAuthenticated = this.cookieService.get('sessionuser');
    if (isAuthenticated) {
      return true;
    } else {
      this.router.navigate(['/session/signin']);
      return false;
    }
  }
}

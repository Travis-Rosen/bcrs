<<<<<<< HEAD
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';
import { map } from 'rxjs/operators';
import { RoleService } from './services/role.service';
import { Router } from '@angular/router';
=======
/*
 ; Title:  role.guard.ts
 ; Author: Group-2
 ; Date:   08 December 2021
 ; Description: Role Guard file
*/

import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { map } from 'rxjs/operators';
import { RoleService } from './services/role.service';

>>>>>>> 908b2b6aa8f32ba8dfc99b2013f2905dec3044a4

@Injectable({
  providedIn: 'root'
})
export class RoleGuard implements CanActivate {
  constructor(private router: Router, private cookieService: CookieService, private roleService: RoleService) { }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot) {
      return this.roleService.findUserRole(this.cookieService.get('session_user')).pipe(map(res =>
        {
          console.log(res);
          if (res['data'].role === 'admin')
          {
            return true;
          }
          else
          {
            this.router.navigate(['/']);
            return false;
          }
      })
    );
  }
<<<<<<< HEAD

}
=======
  
}
>>>>>>> 908b2b6aa8f32ba8dfc99b2013f2905dec3044a4

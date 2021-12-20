/*
 ; Title:  base-layout.component.ts
 ; Author: Group-2
 ; Date:   27 November 2021
 ; Description: base-layout component
*/

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
<<<<<<< HEAD
import { CartService } from '../services/cart.service';
import { HomeComponent } from 'src/app/pages/home/home.component';
import { Role } from '../interfaces/role';
=======
import { Role } from '../interfaces/role.interface';
>>>>>>> 908b2b6aa8f32ba8dfc99b2013f2905dec3044a4
import { RoleService } from '../services/role.service';

@Component({
  selector: 'app-base-layout',
  templateUrl: './base-layout.component.html',
  styleUrls: ['./base-layout.component.css']
})
export class BaseLayoutComponent implements OnInit {

  year: number = Date.now();
  userRole: any;
  username: string;
  badgeCount: number;
  userRole: any;

<<<<<<< HEAD



  constructor(private cookieService: CookieService, private router: Router, private roleService: RoleService) {
    this.isLoggedIn = this.cookieService.get('session_user') ? true : false;
    console.log('isLoggedIn: ' + this.isLoggedIn);
    this.badgeCount = 0;
    this.roleService.findUserRole(this.cookieService.get('session_user')).subscribe(res => {
      this.userRole = res['data'];
    })
   }



  ngOnInit(): void {
    this.username = this.cookieService.get('session_user');
  }

  isAdmin(): boolean {
    return this.userRole.role === 'admin';
  }

  userConfig(): void {
    this.router.navigate(['/users']);
  }
=======
  constructor(private cookieService: CookieService, private router: Router, private roleService: RoleService) {
    // gets user role to define access level
    this.roleService.findUserRole(this.cookieService.get('session_user')).subscribe(res => {
      this.userRole = res['data'];
    })
  }
    // check if the user is an admin
    isAdmin(): boolean {
      return this.userRole.role === 'admin';
    }
  

  ngOnInit(): void {
    this.username = this.cookieService.get('session_user');
>>>>>>> 908b2b6aa8f32ba8dfc99b2013f2905dec3044a4

  }

  signOut() {
    this.cookieService.deleteAll();
    this.router.navigate(['/session/signin']);
  }

  roleConfig(): void{
    this.router.navigate(['/roles']);
  }

  adminReport(): void {
    this.router.navigate(['/purchases-by-service-graph'])
  }



}

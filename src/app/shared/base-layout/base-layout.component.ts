/*
 ; Title:  base-layout.component.ts
 ; Author: Group-2
 ; Date:   27 November 2021
 ; Description: base-layout component
*/

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { Role } from '../interfaces/role.interface';
import { RoleService } from '../services/role.service';

@Component({
  selector: 'app-base-layout',
  templateUrl: './base-layout.component.html',
  styleUrls: ['./base-layout.component.css']
})
export class BaseLayoutComponent implements OnInit {

  year: number = Date.now();
  userRole: any;

  constructor(private cookieService: CookieService, private router: Router, private roleService: RoleService) {
    // gets user role to define access level
    this.roleService.findUserRole(this.cookieService.get('session_user')).subscribe(res => {
      this.userRole = res['data'];
    })
  }


  ngOnInit(): void {
  }

  signOut() {
    this.cookieService.deleteAll();
    this.router.navigate(['/session/signin']);
  }
}

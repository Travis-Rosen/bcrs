/*
============================================
; Title:  user-list.components.ts
; Author: Group-2
; Date:   29 November 2021
; Description: User-list components.
;===========================================
*/

import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/shared/interfaces/user.interface';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
//Create user variable and get to User item.
  users: User[];
  //Set display columns
  displayColumns= ['userName', 'firstName', "lastName", 'phoneNumber']
  constructor(private userService: UserService) {
  //Call findAllUsers()
  this.userService.findAllUsers().subscribe( res => {
    this.users = res ['data'];
    console.log(this.users);
  }, err => {
    console.log(err);
  })
}

  ngOnInit(): void {
  }

}

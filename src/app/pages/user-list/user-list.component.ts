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
import { MatDialog } from '@angular/material/dialog';
import { DeleteRecordDialogComponent } from 'src/app/shared/delete-record-dialog/delete-record-dialog.component';


@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
//Create user variable and get to User item.
  users: User[];
  //Set display columns
  displayedColumns= ['userName', 'firstName', "lastName", 'phoneNumber', 'address', 'email', 'functions'];

  constructor(private dialog: MatDialog, private userService: UserService) {
  //Call findAllUsers()
  this.userService.findAllUsers().subscribe( res => {
    this.users = res['data'];
    console.log(this.users);
  }, err => {
    console.log(err);
  });
}

  ngOnInit(): void {
  }

  delete(userId: string, recordId: string): void {
    const dialogRef = this.dialog.open(DeleteRecordDialogComponent, {
      data: {
        recordId,
        dialogHeader: 'Delete Record Dialog',
        dialogBody: `Are you sure you want to delete user ${recordId}?`
      },
      disableClose: true,
      width: '800px'
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result === 'confirm') {
        this.userService.deleteUser(userId).subscribe(res => {
          console.log('User delete');
          this.users = this.users.filter(u => u._id !== userId);
        });
      }
    });
  }
}

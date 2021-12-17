/*
=============================================================
; Title:  role-list.component.ts
; Author: group 2
; Date:   08 December 2021
; Description: role-list component
; =============================================================
*/

// Import required statements
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DeleteRecordDialogComponent } from '../../shared/delete-record-dialog/delete-record-dialog.component';
import { Role } from 'src/app/shared/interfaces/role';
import { RoleService } from '../../shared/services/role.service';
import { Message } from 'primeng/api/message';

@Component({
  selector: 'app-role-list',
  templateUrl: './role-list.component.html',
  styleUrls: ['./role-list.component.css']
})
export class RoleListComponent implements OnInit {
  roles: Role[];
  errorMessages: Message[];
  displayedColumns = ['role', 'functions'];

  constructor(private dialog: MatDialog, private roleService: RoleService) {
    this.roleService.findAllRoles().subscribe(res => {
      this.roles = res['data'];
      console.log(this.roles);
    })
  }

  ngOnInit(): void {}

  // delete role
  delete(roleId, text) {
    // open dialog
    const dialogRef = this.dialog.open(DeleteRecordDialogComponent, {
      data: {
        roleId,
        dialogHeader: 'Delete Record Dialog',
        dialogBody: `Are you sure you want to delete role: '${text}'?`,
      },
      disableClose: true,
      width: '800px',
    });

    // on close dialog
    dialogRef.afterClosed().subscribe((result) => {
      // if it is true
      if (result === 'confirm') {
        // delete role
        this.roleService.deleteRole(roleId).subscribe(
          // on success
          (res) => {
            console.log('Role deleted'); // log to console
            // remove role
            this.roles = this.roles.filter((role) => role._id !== roleId);
          },
          // on error
          (err) => {
            // primeNG message
            this.errorMessages = [
              { severity: 'error', summary: 'Error', detail: err.message },
            ];
          }
        );
      }
    });
  }
}

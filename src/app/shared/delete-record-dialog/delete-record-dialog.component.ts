/**
=============================================================
 ; Title:  delete-record-dialog.component.ts
 ; Author: Group-2
 ; Date:   06 Decemeber 2021
 ; Description:  delete-record-dialog component
=============================================================
*/

import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-delete-record-dialog',
  templateUrl: './delete-record-dialog.component.html',
  styleUrls: ['./delete-record-dialog.component.css']
})
export class DeleteRecordDialogComponent implements OnInit {

    //Creating Variables for the Component
    recordId: string;
    dialogHeader: string;
    dialogBody: string;
  
    constructor(private dialogRef: MatDialogRef<DeleteRecordDialogComponent>, @Inject(MAT_DIALOG_DATA) data) {
      this.recordId = data.recordId;
      this.dialogHeader = data.dialogHeader;
      this.dialogBody = data.dialogBody;
     }
  
  ngOnInit(): void {
  }

}

/*
============================================
; Title:  security-question-list.component.ts
; Author: Group-2
; Date:   29 November 2021
; Description: Security question list component
;===========================================
*/

//Imports
import { Component, OnInit } from '@angular/core';
import { DeleteRecordDialogComponent } from './../../shared/delete-record-dialog/delete-record-dialog.component'
import { HttpClient } from '@angular/common/http';
import { MatDialog } from '@angular/material/dialog';
import { SecurityQuestionService } from 'src/app/shared/services/security-question.service';
import { SecurityQuestion } from 'src/app/shared/interfaces/security-question.interface';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-security-question-list',
  templateUrl: './security-question-list.component.html',
  styleUrls: ['./security-question-list.component.css']
})
export class SecurityQuestionListComponent implements OnInit {
  securityQuestions: SecurityQuestion[];
  displayedColumns = ['question', 'functions'];

  constructor(private dialog: MatDialog, private securityQuestionService: SecurityQuestionService) {
    this.securityQuestionService.findAllSecurityQuestions().subscribe(res => {
      this.securityQuestions = res;
      console.log(this.securityQuestions);
    }, err => {
      console.log(err);
    });
   }

  ngOnInit() {
  }

  delete(recordId: string): void {
    const dialogRef = this.dialog.open(DeleteRecordDialogComponent, {
      data: {
        recordId,
        dialogHeader: 'Delete Record Dialog',
        dialogBody: `Are you sure you want to delete this security question?`
      },
      disableClose: true,
      width: '800px'
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result === 'confirm') {
        this.securityQuestionService.deleteSecurityQuestion(recordId).subscribe(res => {
          console.log('Security Question Deletion Successful');
          this.securityQuestions = this.securityQuestions.filter(q => q._id !== recordId);
        });
      }
    });
  }
}

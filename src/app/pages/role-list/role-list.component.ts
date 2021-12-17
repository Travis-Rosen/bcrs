/**
=============================================================
; Title:  role-list.component.ts
; Author: group 2
; Date:   08 December 2021
; Description: role-list component
; =============================================================
*/

import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DeleteRecordDialogComponent } from '../../shared/delete-record-dialog/delete-record-dialog.component';
import { Role } from '../../shared/interfaces/role';
import { RoleService } from '../../shared/services/role.service';
import { Message } from 'primeng/api/message';


import {MessageService} from 'primeng/api';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-role-list',
  templateUrl: './role-list.component.html',
  styleUrls: ['./role-list.component.css'],
  providers: [MessageService]
})
export class RoleListComponent implements OnInit {

  msgs1: Message[];

  msgs2: Message[];

  roles: Role[];
  errorMessages: Message[];
  displayedColumns = ['role', 'functions'];

  constructor(private messageService: MessageService, private primengConfig: PrimeNGConfig) {}

ngOnInit() {
        this.msgs1 = [
            {severity:'success', summary:'Success', detail:'Message Content'},
            {severity:'info', summary:'Info', detail:'Message Content'},
            {severity:'warn', summary:'Warning', detail:'Message Content'},
            {severity:'error', summary:'Error', detail:'Message Content'}
        ];

        this.primengConfig.ripple = true;
    }

    addMessages() {
        this.msgs2 = [
            {severity:'success', summary:'Success', detail:'Message Content'},
            {severity:'info', summary:'Info', detail:'Message Content'},
            {severity:'warn', summary:'Warning', detail:'Message Content'},
            {severity:'error', summary:'Error', detail:'Message Content'}
        ];
    }

    clearMessages() {
        this.msgs2 = [];
    }

    showViaService() {
        this.messageService.add({severity:'success', summary:'Service Message', detail:'Via MessageService'});
    }
}

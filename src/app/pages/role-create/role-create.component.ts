/**
=============================================================
; Title:  role-create.component.spec.ts
; Author: group 2
; Date:   10 December 2021
; Description: role-create component
; =============================================================
*/

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Message } from 'primeng/api/message';
import { RoleService } from '../../shared/services/role.service';
import { Role } from '../../shared/interfaces/role';

@Component({
  selector: 'app-role-create',
  templateUrl: './role-create.component.html',
  styleUrls: ['./role-create.component.css']
})
export class RoleCreateComponent implements OnInit {
  form: FormGroup;
  errorMessages: Message[];

  constructor(private fb: FormBuilder, private router: Router, private roleService: RoleService) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      text: [null, Validators.compose([Validators.required])]
    });
  }
  create() {
    const newRole = {
      text: this.form.controls['text'].value
    } as Role

    this.roleService.createRole(newRole).subscribe(res => {
      this.router.navigate(['/roles']);
    }, err => {
      console.log(err);
      this.errorMessages = [
        { severity: 'error', summary: 'Error', detail: err.message },
      ];

    })
  }

  // Cancel out and navigate back to the main page for roles
  cancel() {
    this.router.navigate(['/roles']);
  }

}

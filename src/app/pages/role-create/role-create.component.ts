/**
=============================================================
<<<<<<< HEAD
; Title:  role-create.component.spec.ts
=======
; Title:  role-create.component.ts
>>>>>>> 908b2b6aa8f32ba8dfc99b2013f2905dec3044a4
; Author: group 2
; Date:   10 December 2021
; Description: role-create component
; =============================================================
*/

<<<<<<< HEAD
=======
//Import required statements
>>>>>>> 908b2b6aa8f32ba8dfc99b2013f2905dec3044a4
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Message } from 'primeng/api/message';
import { RoleService } from '../../shared/services/role.service';
<<<<<<< HEAD
import { Role } from '../../shared/interfaces/role';
=======
import { Role } from '../../shared/interfaces/role.interface';
>>>>>>> 908b2b6aa8f32ba8dfc99b2013f2905dec3044a4

@Component({
  selector: 'app-role-create',
  templateUrl: './role-create.component.html',
  styleUrls: ['./role-create.component.css']
})
export class RoleCreateComponent implements OnInit {
  form: FormGroup;
  errorMessages: Message[];

<<<<<<< HEAD
  constructor(private fb: FormBuilder, private router: Router, private roleService: RoleService) { }

  ngOnInit(): void {
=======
  constructor(private fb: FormBuilder, private router: Router, private roleService: RoleService) {
  }

  ngOnInit() {
>>>>>>> 908b2b6aa8f32ba8dfc99b2013f2905dec3044a4
    this.form = this.fb.group({
      text: [null, Validators.compose([Validators.required])]
    });
  }
<<<<<<< HEAD
=======

  // Create a new role
>>>>>>> 908b2b6aa8f32ba8dfc99b2013f2905dec3044a4
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
<<<<<<< HEAD

}
=======
}
>>>>>>> 908b2b6aa8f32ba8dfc99b2013f2905dec3044a4

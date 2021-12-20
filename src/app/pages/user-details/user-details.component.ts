/*
 ; Title:  user-details.component.ts
 ; Author: Group-2
 ; Date:   08 December 2021
 ; Description: user-details
*/

//import statements
import { Role } from './../../shared/interfaces/role.interface';
import { RoleService } from './../../shared/services/role.service';
import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import { RoleService } from './../../shared/services/role.service';
import { Role } from './../../shared/interfaces/role';
=======
>>>>>>> 908b2b6aa8f32ba8dfc99b2013f2905dec3044a4
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../../shared/services/user.service';
import { User } from '../../shared/interfaces/user.interface';
<<<<<<< HEAD
=======

>>>>>>> 908b2b6aa8f32ba8dfc99b2013f2905dec3044a4

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  user: User;
  userId: string;
  form: FormGroup;
  roles: Role[];

  constructor(private route: ActivatedRoute, private fb:FormBuilder, private router: Router,
    private userService: UserService, private roleService: RoleService) {

<<<<<<< HEAD
  user: User;
  userId: string;
  form: FormGroup;
  roles: Role[];

  constructor(private route: ActivatedRoute, private fb:FormBuilder, private router: Router,
    private userService: UserService, private roleService: RoleService) {

      this.userId = this.route.snapshot.paramMap.get('userId');

      this.userService.findUserById(this.userId).subscribe(res => {
          this.user = res['data'];
      }, err => {
          console.log(err);
      }, () => {
=======
        this.userId = this.route.snapshot.paramMap.get('userId');

        this.userService.findUserById(this.userId).subscribe(res => {
            this.user = res['data'];
        }, err => {
            console.log(err);
        }, () => {
>>>>>>> 908b2b6aa8f32ba8dfc99b2013f2905dec3044a4
          this.form.controls.firstName.setValue(this.user.firstName);
          this.form.controls.lastName.setValue(this.user.lastName);
          this.form.controls.phoneNumber.setValue(this.user.phoneNumber);
          this.form.controls.address.setValue(this.user.address);
          this.form.controls.email.setValue(this.user.email);
          this.form.controls.role.setValue(this.user.role['role']);
<<<<<<< HEAD

          console.log(this.user);

          this.roleService.findAllRoles().subscribe(res => {
              this.roles = res.data;
          })
      });
  }

  //ensure field is filled in
  ngOnInit(): void{
      this.form = this.fb.group({
          firstName: [null, Validators.compose([Validators.required])],
          lastName: [null, Validators.compose([Validators.required])],
          phoneNumber: [null, Validators.compose([Validators.required])],
          address: [null, Validators.compose([Validators.required])],
          email: [null, Validators.compose([Validators.required, Validators.email])],
          role: [null, Validators.compose([Validators.required])]
      });
  }

  //updates form values
  saveUser(): void {
      const updatedUser: User = {
=======
  
          console.log(this.user);
  
          this.roleService.findAllRoles().subscribe((res) => {
            this.roles = res.data;
          })
        });
  }

    //ensure field is filled in
    ngOnInit(): void{
        this.form = this.fb.group({
          firstName: [null, Validators.compose([Validators.required])],
          lastName: [null, Validators.compose([Validators.required])],
          phoneNumber: [null, Validators.compose([Validators.required])],
          address: [null, Validators.compose([Validators.required])],
          email: [null, Validators.compose([Validators.required, Validators.email])],
          role: [null, Validators.compose([Validators.required])]
      });
    }

    //updates form values
    saveUser(): void {
        const updatedUser: User = {
>>>>>>> 908b2b6aa8f32ba8dfc99b2013f2905dec3044a4
          firstName: this.form.controls.firstName.value,
          lastName: this.form.controls.lastName.value,
          phoneNumber: this.form.controls.phoneNumber.value,
          address: this.form.controls.address.value,
          email: this.form.controls.email.value,
          role: this.form.controls.role.value
      };

<<<<<<< HEAD
      this.userService.updateUser(this.userId, updatedUser).subscribe(res => {
          this.router.navigate(['/users']);
      }, err => {
          console.log(err);
      });
  }

  //cancel option. brings user back to user page
  cancel(): void{
      this.router.navigate(['/users']);
  }
=======
      this.userService.updateUser(this.userId, updatedUser).subscribe(
        // Success
        (res) => {
          this.router.navigate(['/users']);
        },
        (err) => {
          console.log(err); 
        }
      );
    }
  
    //cancel option. brings user back to user page
    cancel(): void{
        this.router.navigate(['/users']);
    }
>>>>>>> 908b2b6aa8f32ba8dfc99b2013f2905dec3044a4
}

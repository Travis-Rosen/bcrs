/*
============================================
; Title:  role.service.ts
; Author: Group-2
; Date:   08 December 2021
; Description: role service file
;===========================================
*/

//Import required statements
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
<<<<<<< HEAD
import { Role } from '../interfaces/role';
=======
import { Role } from '../interfaces/role.interface';
>>>>>>> 908b2b6aa8f32ba8dfc99b2013f2905dec3044a4


@Injectable({
  providedIn: 'root'
})
export class RoleService {

  constructor(private http: HttpClient) { }

  // get all roles
  findAllRoles(): Observable<any> {
    return this.http.get('/api/roles');
  }

  // get one role by id
  findRoleById(roleId: string): Observable<any> {
<<<<<<< HEAD
    return this.http.get(`/api/roles/${roleId}`);
=======
    return this.http.get(`api/roles/${roleId}`);
>>>>>>> 908b2b6aa8f32ba8dfc99b2013f2905dec3044a4
  }

  // create a new role
  createRole(role: Role): Observable<any> {
<<<<<<< HEAD
    return this.http.post(`/api/roles`, {
=======
    return this.http.post(`api/roles`, {
>>>>>>> 908b2b6aa8f32ba8dfc99b2013f2905dec3044a4
      text: role.text,
    });
  }

  // update a role
  updateRole(roleId: string, role: Role): Observable<any> {
<<<<<<< HEAD
    return this.http.put(`/api/roles/${roleId}`, {
=======
    return this.http.put(`api/roles/${roleId}`, {
>>>>>>> 908b2b6aa8f32ba8dfc99b2013f2905dec3044a4
      text: role.text,
    });
  }

  // delete a role
  deleteRole(roleId: string): Observable<any> {
<<<<<<< HEAD
    return this.http.delete(`/api/roles/${roleId}`);
=======
    return this.http.delete(`api/roles/${roleId}`);
>>>>>>> 908b2b6aa8f32ba8dfc99b2013f2905dec3044a4
  }

  // find user role by  userName
  findUserRole(userName: string): Observable<any> {
<<<<<<< HEAD
    return this.http.get(`/api/users/${userName}/role`);
  }
}
=======
    return this.http.get(`api/users/${userName}/role`);
  }
}
>>>>>>> 908b2b6aa8f32ba8dfc99b2013f2905dec3044a4

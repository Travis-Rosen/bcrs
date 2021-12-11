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
import { Role } from '../interfaces/role.interface';


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
    return this.http.get(`api/roles/${roleId}`);
  }

  // create a new role
  createRole(role: Role): Observable<any> {
    return this.http.post(`api/roles`, {
      text: role.text,
    });
  }

  // update a role
  updateRole(roleId: string, role: Role): Observable<any> {
    return this.http.put(`api/roles/${roleId}`, {
      text: role.text,
    });
  }

  // delete a role
  deleteRole(roleId: string): Observable<any> {
    return this.http.delete(`api/roles/${roleId}`);
  }

  // find user role by  userName
  findUserRole(userName: string): Observable<any> {
    return this.http.get(`api/users/${userName}/role`);
  }
}
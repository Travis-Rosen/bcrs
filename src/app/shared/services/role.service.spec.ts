/*
============================================
; Title:  role.service.spec.ts
; Author: Group-2
; Date:   08 December 2021
; Description: role service file
;===========================================
*/

import { TestBed } from '@angular/core/testing';

import { RoleService } from './role.service';

describe('RoleService', () => {
  let service: RoleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RoleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

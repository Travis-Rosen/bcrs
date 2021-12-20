<<<<<<< HEAD
=======
/*
============================================
; Title:  role.service.spec.ts
; Author: Group-2
; Date:   08 December 2021
; Description: role service file
;===========================================
*/

>>>>>>> 908b2b6aa8f32ba8dfc99b2013f2905dec3044a4
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

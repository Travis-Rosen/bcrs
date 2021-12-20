<<<<<<< HEAD
=======
/**
=============================================================
; Title:  role-list.component.spec.ts
; Author: group 2
; Date:   08 December 2021
; Description: role-list component
; =============================================================
*/

>>>>>>> 908b2b6aa8f32ba8dfc99b2013f2905dec3044a4
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoleListComponent } from './role-list.component';

describe('RoleListComponent', () => {
  let component: RoleListComponent;
  let fixture: ComponentFixture<RoleListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoleListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RoleListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

<<<<<<< HEAD
=======
/**
=============================================================
; Title:  role-details.component.spec.ts
; Author: group 2
; Date:   08 December 2021
; Description: role-details component
; =============================================================
*/

>>>>>>> 908b2b6aa8f32ba8dfc99b2013f2905dec3044a4
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoleDetailsComponent } from './role-details.component';

describe('RoleDetailsComponent', () => {
  let component: RoleDetailsComponent;
  let fixture: ComponentFixture<RoleDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoleDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RoleDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

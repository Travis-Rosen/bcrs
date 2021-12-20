<<<<<<< HEAD
=======
/**
=============================================================
; Title:  role-create.component.spec.ts
; Author: group 2
; Date:   10 December 2021
; Description: role-create component
; =============================================================
*/

>>>>>>> 908b2b6aa8f32ba8dfc99b2013f2905dec3044a4
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoleCreateComponent } from './role-create.component';

describe('RoleCreateComponent', () => {
  let component: RoleCreateComponent;
  let fixture: ComponentFixture<RoleCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoleCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RoleCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

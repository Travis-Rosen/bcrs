/*
 ; Title:  server-error.component.spec.ts
 ; Author: Group-2
 ; Date:   02 December 2021
 ; Description: server-error component
*/

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServerErrorComponent } from './server-error.component';

describe('ServerErrorComponent', () => {
  let component: ServerErrorComponent;
  let fixture: ComponentFixture<ServerErrorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServerErrorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServerErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

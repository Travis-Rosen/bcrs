/*
 ; Title:  reset-password-form
 ; Author: Group-2
 ; Date:   06 December 2021
 ; Description:  Reset password ts.
*/

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-reset-password-form',
  templateUrl: './reset-password-form.component.html',
  styleUrls: ['./reset-password-form.component.css']
})
export class ResetPasswordFormComponent implements OnInit {

  userName: string;
  form: FormGroup;

  constructor(private http:HttpClient, private fb:FormBuilder,
  private router:Router, private route:ActivatedRoute, private cookieService: CookieService) {
    this.userName = this.route.snapshot.queryParamMap.get('userName');
   }


  ngOnInit(): void {
    //Build Form
    this.form = this.fb.group({
      userName: [null, Validators.compose([Validators.required])],
      password: [null, Validators.compose([Validators.required, Validators.pattern('^(?=.*[A-Za-z])(?=.*\\d)[A-Za-z\\d]{8,}$')])],
    });
  }
}


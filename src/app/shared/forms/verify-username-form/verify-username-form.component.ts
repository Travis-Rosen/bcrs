/*
Author: Group 2
Date: 12/5/2021
Name: verify-username-form.component
Desc: Logic for verify username component
*/


import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Message } from 'primeng/api/message';

@Component({
  selector: 'app-verify-username-form',
  templateUrl: './verify-username-form.component.html',
  styleUrls: ['./verify-username-form.component.css']
})
export class VerifyUsernameFormComponent implements OnInit {
  //Defining form and error messages
  form: FormGroup;
  errorMessages: Message[];

  constructor(private http: HttpClient, private fb: FormBuilder, private router: Router) {

   }
   //Defining form group
  ngOnInit(): void {
    this.form = this.fb.group({
      userName: [null, Validators.compose([Validators.required])]
    });
  }
  //Validate username function // calling verify api
  validateUsername() {
    const userName = this.form.controls['userName'].value;
    this.http.get('/api/session/verify/users' + userName).subscribe(res => {
      console.log(res);
      this.router.navigate(['/session/verify-security-questions'], {queryParams: {userName: userName}, skipLocationChange: true});
    }, err => {
      this.errorMessages = [
        {severity: 'error', summary: 'Error', detail: err['message']}
      ]
      console.log(err);
    });
  }

}

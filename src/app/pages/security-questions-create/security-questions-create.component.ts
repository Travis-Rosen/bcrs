/*
============================================
; Title:  security-question-create.component.ts
; Author: Group-2
; Date:   29 November 2021
; Description: Security question create component
;===========================================
*/
//Imports
import { Component, OnInit } from '@angular/core';
import { SecurityQuestionService } from 'src/app/shared/services/security-question.service';
import { SecurityQuestion } from 'src/app/shared/interfaces/security-question.interface';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-security-questions-create',
  templateUrl: './security-questions-create.component.html',
  styleUrls: ['./security-questions-create.component.css']
})
export class SecurityQuestionsCreateComponent implements OnInit {
  form: FormGroup;

  constructor(private fb: FormBuilder, private router: Router, private securityQuestionService: SecurityQuestionService) {

   }

  ngOnInit(): void {
    this.form = this.fb.group({
      text: [null, Validators.compose([Validators.required])],
    });
  }

  create(): void {
    const newSecurityQuestion: SecurityQuestion = {
      text: this.form.controls.text.value
    }

    this.securityQuestionService.createSecurityQuestion(newSecurityQuestion).subscribe(res => {
      this.router.navigate(['/security-questions']);
    }, err => {
      console.log(err);
    });
  }

  cancel(): void {
    this.router.navigate(['/security-questions']);
  }
}

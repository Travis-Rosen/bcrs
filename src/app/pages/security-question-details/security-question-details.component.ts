/*
============================================
; Title:  security-question-details.component.ts
; Author: Group-2
; Date:   29 November 2021
; Description: Security question details component
;===========================================
*/
//Imports
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SecurityQuestionService } from 'src/app/shared/services/security-question.service';
import { SecurityQuestion } from 'src/app/shared/interfaces/security-question.interface';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-security-question-details',
  templateUrl: './security-question-details.component.html',
  styleUrls: ['./security-question-details.component.css']
})
export class SecurityQuestionDetailsComponent implements OnInit {
  question: SecurityQuestion;
  questionId: string;
  form: FormGroup;

  constructor(private route: ActivatedRoute, private fb: FormBuilder, private router: Router, private securityQuestionService: SecurityQuestionService) {
    this.questionId = this.route.snapshot.paramMap.get('questionId');
    this.securityQuestionService.findSecurityQuestionById(this.questionId).subscribe(res => {
      this.question = res['data'];
    }, err => {
      console.log(err);
    }, () => {
      this.form.controls.text.setValue(this.question.text);
    })
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      text: [null, Validators.compose([Validators.required])],
    });
  }

  savedQuestion(): void {
    const updatedSecurityQuestion: SecurityQuestion = {
      text: this.form.controls.text.value
    }
    this.securityQuestionService.updateSecurityQuestion(this.questionId, updatedSecurityQuestion).subscribe(res => {
      this.router.navigate(['/security-questions'])
    });
  }

  cancel(): void {
    this.router.navigate(['/security-questions'])
  }

}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-base-layout',
  templateUrl: './base-layout.component.html',
  styleUrls: ['./base-layout.component.css']
})
export class BaseLayoutComponent implements OnInit {

  year: number = Date.now();
  isLoggedIn: boolean;
  userName: string;

  constructor(private cookieService: CookieService, private router: Router) {
    this.isLoggedIn = this.cookieService.get('session_user') ? true : false;
    console.log('isLoggedIn: ' + this.isLoggedIn);
   }



  ngOnInit(): void {
    console.log('inside the ngOnInit of the base-layout.component.html file');
    this.userName = sessionStorage.getItem('userName');
    console.log('Logged in username ' + this.userName);
  }

  userConfig(): void {
    this.router.navigate(['/users']);
  }

  questionConfig(): void {
    this.router.navigate(['/security-questions']);
  }

  signOut() {
    this.cookieService.deleteAll();
    this.router.navigate(['/session/signin']);
  }
}

/*
Author: Travis Rosen
Date: 11/28/2021
Title: app.module.ts
Desc: Imports
*/

//General Imports
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
//Component Imports
import { HomeComponent } from './pages/home/home.component';
import { BaseLayoutComponent } from './shared/base-layout/base-layout.component';
import { AuthLayoutComponent } from './shared/auth-layout/auth-layout.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { SigninComponent } from './pages/signin/signin.component';
import { SecurityQuestionListComponent } from './pages/security-question-list/security-question-list.component';
import { SecurityQuestionDetailsComponent } from './pages/security-question-details/security-question-details.component';
import { SecurityQuestionsCreateComponent } from './pages/security-questions-create/security-questions-create.component';
import { UserCreateComponent } from './pages/user-create/user-create.component';
import { UserDetailsComponent } from './pages/user-details/user-details.component';
import { UserListComponent } from './pages/user-list/user-list.component';
import { DeleteRecordDialogComponent } from './shared/delete-record-dialog/delete-record-dialog.component';
import { ServerErrorComponent } from './pages/server-error/server-error.component';
import { ResetPasswordFormComponent } from './shared/forms/reset-password-form/reset-password-form.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { ContactComponent } from './pages/contact/contact.component';
import { RegisterComponent } from './pages/register/register.component';
import { VerifySecurityQuestionsFormComponent } from './shared/forms/verify-security-questions-form/verify-security-questions-form.component';
import { VerifyUsernameFormComponent } from './shared/forms/verify-username-form/verify-username-form.component';
//Material Design / styling imports
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialogModule } from '@angular/material/dialog';
import { MatMenuModule } from '@angular/material/menu';
import { MatDividerModule } from '@angular/material/divider';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { MatTableModule } from '@angular/material/table';
import { MatSelect, MatSelectModule } from '@angular/material/select';
import { MatListModule} from '@angular/material/list';
import { MessageModule } from 'primeng/message';
import { MessagesModule} from 'primeng/messages';
import {MatStepperModule} from '@angular/material/stepper';
//CookieService & ErrorInterceptor
import { CookieService } from 'ngx-cookie-service';
import { ErrorInterceptor } from './shared/error.interceptor';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BaseLayoutComponent,
    AuthLayoutComponent,
    UserCreateComponent,
    UserDetailsComponent,
    UserListComponent,
    NotFoundComponent,
    SigninComponent,
    DeleteRecordDialogComponent,
    SecurityQuestionListComponent,
    SecurityQuestionDetailsComponent,
    SecurityQuestionsCreateComponent,
    ServerErrorComponent,
    ResetPasswordFormComponent,
    AboutUsComponent,
    ContactComponent,
    RegisterComponent,
    VerifySecurityQuestionsFormComponent,
    VerifyUsernameFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    MatDialogModule,
    MatMenuModule,
    MatDividerModule,
    MatTableModule,
    MatSelectModule,
    MatListModule,
    MatStepperModule,
    MessageModule,
    MessagesModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

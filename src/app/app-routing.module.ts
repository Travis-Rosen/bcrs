/*
Author: Travis Rosen
Date: 11/28/2021
Title: app-routing.module.ts
Description: Routing page
*/

//Imports
import { HomeComponent } from './pages/home/home.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { AuthLayoutComponent } from './shared/auth-layout/auth-layout.component';
import { AuthGuard } from './shared/auth.guard';
import { SigninComponent } from './pages/signin/signin.component'
import { BaseLayoutComponent } from './shared/base-layout/base-layout.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserListComponent } from './pages/user-list/user-list.component';
import { UserCreateComponent } from './pages/user-create/user-create.component';
import { UserDetailsComponent } from './pages/user-details/user-details.component';
import { SecurityQuestionListComponent } from './pages/security-question-list/security-question-list.component';
import { SecurityQuestionDetailsComponent } from './pages/security-question-details/security-question-details.component';
import { SecurityQuestionsCreateComponent } from './pages/security-questions-create/security-questions-create.component';
import { ServerErrorComponent } from './pages/server-error/server-error.component';
import { ContactComponent } from './pages/contact/contact.component';
import { RegisterComponent } from './pages/register/register.component';
import { VerifyUsernameFormComponent } from './shared/forms/verify-username-form/verify-username-form.component';
import { VerifySecurityQuestionsFormComponent } from './shared/forms/verify-security-questions-form/verify-security-questions-form.component';
import { ResetPasswordFormComponent } from './shared/forms/reset-password-form/reset-password-form.component';
import { RoleListComponent } from './pages/role-list/role-list.component';
import { RoleCreateComponent } from './pages/role-create/role-create.component';
import { RoleDetailsComponent } from './pages/role-details/role-details.component';
import { RoleGuard } from './shared/role.guard';
import { PurchasesByServiceGraphComponent } from './pages/purchases-by-service-graph/purchases-by-service-graph.component';



const routes: Routes = [
  {
    path: '',
    component: BaseLayoutComponent,
    children: [
      {
        path: '',
        component: HomeComponent,
      },
      {
        path: "purchases-by-service-graph",
        component: PurchasesByServiceGraphComponent,
        canActivate: [RoleGuard]
      },
      {
        path: 'about',
        component: AboutUsComponent,
      },
      {
        path: 'contact',
        component: ContactComponent,
      },
      {
        path: 'users',
        component: UserListComponent,
        canActivate: [RoleGuard],
      },
      {
        path: 'users/:userId',
        component: UserDetailsComponent,
        canActivate: [RoleGuard],
      },
      {
        path: 'users/create/new',
        component: UserCreateComponent,
        canActivate: [RoleGuard],
      },
      {
        path: 'security-questions',
        component: SecurityQuestionListComponent,
        canActivate: [RoleGuard],
      },
      {
        path: 'security-questions/:id',
        component: SecurityQuestionDetailsComponent,
        canActivate: [RoleGuard],
      },
      {
        path: 'security-questions/create/new',
        component: SecurityQuestionsCreateComponent,
        canActivate: [RoleGuard],
      },
      {
        path: "roles",
        component: RoleListComponent,
        canActivate: [RoleGuard],
      },
      {
        path: "roles/create/new",
        component: RoleCreateComponent,
        canActivate: [RoleGuard],
      },
      {
        path: "roles/:roleId",
        component: RoleDetailsComponent,
        canActivate: [RoleGuard],
      }
    ],

    canActivate: [AuthGuard]
  },
  {
    path: 'session',
    component: AuthLayoutComponent,
    children: [
      {
        path: 'signin',
        component: SigninComponent,
      },
      {
        path: 'register',
        component: RegisterComponent,
      },
      {
        path: 'forgot',
        component: VerifyUsernameFormComponent,
      },
      {
        path: 'verify-security-questions',
        component: VerifySecurityQuestionsFormComponent,
      },
      {
        path: 'reset-password',
        component: ResetPasswordFormComponent,
      },
      {
        path: 'not-found',
        component: NotFoundComponent,
      },
      {
        path: '500',
        component: ServerErrorComponent,
      }
    ]
  },
  {
    path: '**',
    redirectTo:'session/not-found'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true, enableTracing: false, scrollPositionRestoration: 'enabled', relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }

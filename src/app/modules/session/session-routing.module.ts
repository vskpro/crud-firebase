import { AfterloginGuard } from './../../guards/afterLogin/afterlogin.guard';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
    canActivate: [AfterloginGuard]
  },
  {
    path: 'register',
    component: RegisterComponent,
    canActivate: [AfterloginGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SessionRoutingModule { }

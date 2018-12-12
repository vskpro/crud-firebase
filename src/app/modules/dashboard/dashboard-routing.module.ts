import { AuthGuard } from './../../guards/auth/auth.guard';
import { DashboardComponent } from './dashboard.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    canActivate: [AuthGuard],
    // canActivateChild: [AuthGuard],
    children: [
      {
        path: '',
        loadChildren: '../home/home.module#HomeModule',
      },
      {
        path: 'users',
        loadChildren: '../users/users.module#UsersModule',
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }

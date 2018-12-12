import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AuthenticationService } from './../../services/auth/authentication.service'; import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AfterloginGuard implements CanActivate {
  constructor(private authService: AuthenticationService, private router: Router) {

  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      // state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

    if (!(this.authService.isLoggedIn())) {
      // return true;
      console.log('Can activate');
      return true;
    } else {
      this.router.navigate(['dashboard']);
      console.log('Can not activate');
      return false;
    }

  }
}

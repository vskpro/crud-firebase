import { AngularFireAuth } from '@angular/fire/auth';
import { AuthenticationService } from './../../services/auth/authentication.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  public userName;

  constructor(private afAuth: AngularFireAuth, private router: Router, private authService: AuthenticationService) {

  }

  ngOnInit() {

    this.afAuth.auth.onAuthStateChanged(user => {
      // console.log(user);
      if (!user) {
        this.logout();
      }
    });

    this.afAuth.authState.subscribe(data => {
      console.log(data);
      this.userName = data.displayName;
    });

  }

  toggleMenu() {
    document.querySelector('.hamburger').classList.toggle('is-active');
    document.querySelector('.navbar-mobile').classList.toggle('show');
  }

  logout() {
    this.authService.logout().then(data => {
      this.router.navigate(['']);
    }).catch(error => {
      console.log(error);
      alert(error.mesasge);
    });
  }

}

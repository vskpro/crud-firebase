import { AuthenticationService } from './../../../services/auth/authentication.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  public user: any;
  public isSubmitted: Boolean;

  constructor(private authService: AuthenticationService, private router: Router) {
    this.initForm();
  }

  initForm() {
    this.user = {
      email: '',
      password: ''
    };
  }

  login() {
    this.isSubmitted = true;
    console.log(this.user);
    this.authService.loginUser(this.user)
      .then(data => {
        this.isSubmitted = false;
        this.authService.setUserId(data.user.uid);
        this.initForm();
        this.router.navigate(['dashboard']);
      })
      .catch(error => {
        this.isSubmitted = false;
        alert(error.message);
      });
  }

}

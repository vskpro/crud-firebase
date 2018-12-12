import { AuthenticationService } from './../../../services/auth/authentication.service';
import { Component, OnInit } from '@angular/core';
import { User } from './../user.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  user: User;
  isSubmitted: Boolean;

  constructor(private router: Router, private authService: AuthenticationService) {
    this.initForm();
  }

  initForm() {
    this.user = {
      name: '',
      email: '',
      password: ''
    };
  }

  register() {
    this.isSubmitted = true;
    this.authService.createUser(this.user).then(data => {
      console.log(data);
      data.user.updateProfile({
        displayName: this.user.name,
        photoURL: null
      });
      this.loginAfterRegistration(this.user, data);
    }).catch(error => {
      console.log(error);
      this.isSubmitted = false;
      alert(error.message);
    });
  }

  loginAfterRegistration(user, userData) {
    this.authService.loginUser(user)
    .then(data => {
      this.isSubmitted = false;
      this.authService.setUserId(userData.user.uid);
      this.initForm();
      this.router.navigate(['dashboard']);
    })
    .catch(error => {
      this.isSubmitted = false;
      alert(error.message);
    });
  }

}

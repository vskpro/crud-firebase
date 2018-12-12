import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private afAuth: AngularFireAuth) { }

  createUser(user) {
    return this.afAuth.auth.createUserWithEmailAndPassword(user.email, user.password);
  }

  loginUser(user) {
    return this.afAuth.auth.signInWithEmailAndPassword(user.email, user.password);
  }

  isLoggedIn() {
    if (this.getUserId()) {
      return true;
    }
    return false;
  }

  getUserId() {
    return window.localStorage.getItem('uid');
  }

  setUserId(uid) {
    window.localStorage.setItem('uid', uid);
  }

  getUserName() {
    if (this.afAuth.auth.currentUser) {
      return this.afAuth.auth.currentUser.displayName;
    } else {
      return null;
    }
  }

  clearStorage() {
    window.localStorage.clear();
  }

  logout() {
    this.clearStorage();
    return this.afAuth.auth.signOut();
  }

}

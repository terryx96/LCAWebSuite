import { Injectable } from '@angular/core';
import { AngularFireAuth } from "@angular/fire/auth";
import firebase from 'firebase';
import { Router } from  "@angular/router";

@Injectable({
  providedIn: 'root'
})

export class AuthenticationService {

  authState: any = null;

  constructor(private afAuth: AngularFireAuth, private router: Router) {
    this.afAuth.authState.subscribe((auth) => {
      this.authState = auth
    });
  }

  // Sign in with email/password
  loginWithEmail(email: string, password: string) {
    return firebase.auth().signInWithEmailAndPassword(email, password)
      .then((user: any) => {
        this.authState = user
      })
      .catch(error => {
        console.log(error)
        throw error
      });
  }

  // Returns true when user is looged in and email is verified
  get isLoggedIn(): boolean {
    const user = JSON.parse(localStorage.getItem('user'));
    return (user !== null && user.emailVerified !== false) ? true : false;
  }

  signOut(): void {
    firebase.auth().signOut();
    this.router.navigate(['/'])
  }

}
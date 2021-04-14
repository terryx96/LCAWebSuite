import { Injectable } from '@angular/core';
import { AngularFireAuth } from "@angular/fire/auth";
import firebase from 'firebase';
import { Router } from  "@angular/router";

@Injectable({
  providedIn: 'root'
})

export class AuthenticationService {

  authState: any = null;
  isLoggedIn = false;

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
        this.isLoggedIn = true;
      })
      .catch(error => {
        console.log(error)
        throw error
      });
  }

  

  signOut(): void {
    firebase.auth().signOut();
    this.router.navigate(['/'])
    this.isLoggedIn = false;
  }

}
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
    afAuth.authState.subscribe((auth) => {
      this.authState = auth
      localStorage.setItem('user', JSON.stringify(this.authState));
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

  get authenticated(): boolean {
     return this.authState !== null;
  }

  signOut(): void {
    firebase.auth().signOut();
    localStorage.removeItem('user');
    this.router.navigate(['/'])
    this.isLoggedIn = false;
  }

  bodybot(): void {
    console.log("HIIIII")
    localStorage.setItem("cookieLog", "signedout");
  }

}
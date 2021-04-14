import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from "../services/auth/authentication.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css', '../../../node_modules/angular-bootstrap-md/assets/scss/bootstrap/bootstrap.scss', '../../../node_modules/angular-bootstrap-md/assets/scss/mdb.scss']
})
export class SignInComponent implements OnInit {

  email = '';
  password = '';
  error: { name: string, message: string } = { name: '', message: '' };

  constructor(public authService: AuthenticationService, private router: Router) { }

  ngOnInit(): void {
  }

  onLoginEmail(): void {
  this.authService.loginWithEmail(this.email, this.password)
        .then(() => {
          this.router.navigate(['/admin']);
          console.log("Sign in successful");
        })
        .catch(_error => {
          this.error = _error
          console.log("Error returning you to sign-in");
          this.router.navigate(['/sign-in']);
        })
  }
}

import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from "../services/auth/authentication.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
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
        .then(() => this.router.navigate(['/admin']))
        .catch(_error => {
          this.error = _error
          this.router.navigate(['/sign-in'])
        })
  }
}

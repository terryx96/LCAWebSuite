import {Component, OnInit} from '@angular/core';
import { AuthenticationService } from '../services/auth/authentication.service';

@Component({
  selector: 'admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(public authService: AuthenticationService) {}

  ngOnInit() {
  }

  logout() {
    this.authService.signOut();
  }

}

import {Component, OnInit} from '@angular/core';
import { AuthenticationService } from '../services/auth/authentication.service';

@Component({
  selector: 'admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css', '../../../node_modules/angular-bootstrap-md/assets/scss/bootstrap/bootstrap.scss', '../../../node_modules/angular-bootstrap-md/assets/scss/mdb.scss']
})
export class AdminComponent implements OnInit {

  constructor(public authService: AuthenticationService) { }

  ngOnInit() {
  }

  logout() {
    this.authService.signOut();
  }

}

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AuthenticationService } from '../app/services/auth/authentication.service';

//Calendar Stuff
import { FullCalendarModule } from '@fullcalendar/angular'; // the main connector. must go first
import dayGridPlugin from '@fullcalendar/daygrid'; // a plugin
import interactionPlugin from '@fullcalendar/interaction'; // a plugin

import { AppComponent } from './app.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { HomeComponent } from './home/home.component';
import { GalleryComponent } from './gallery/gallery.component';
import { NewsletterComponent } from './newsletter/newsletter.component';
import { DonationsComponent } from './donations/donations.component';
import { ScholarshipComponent } from './scholarship/scholarship.component';
import { InterestComponent } from './interest/interest.component';
import { PhilanthropyComponent } from './philanthropy/philanthropy.component';
import { BrothersComponent } from './brothers/brothers.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { AdminComponent } from './admin/admin.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import {AngularFireStorageModule} from '@angular/fire/storage';
import { environment } from '../environments/environment';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AuthenticationGuard } from './services/auth/authentication.guard';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

import { BrothersListComponent } from './brothers-list/brothers-list.component';
import { AddBrotherComponent } from './add-brother/add-brother.component';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { NavbarComponent } from './navbar/navbar.component';
import { AddBlogpostComponent } from './add-blogpost/add-blogpost.component';
import { AddUploadComponent } from './add-upload/add-upload.component';
import { NewslettersListComponent } from './newsletters-list/newsletters-list.component';
import { PdfComponentComponent } from './pdf-component/pdf-component.component';
import { RemoveBlogpostComponent } from './remove-blogpost/remove-blogpost.component';
import { RemoveBrothersComponent } from './remove-brothers/remove-brothers.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutUsComponent,
    HomeComponent,
    GalleryComponent,
    NewsletterComponent,
    DonationsComponent,
    ScholarshipComponent,
    InterestComponent,
    PhilanthropyComponent,
    BrothersComponent,
    SignInComponent,
    AdminComponent,
    BrothersListComponent,
    AddBrotherComponent,
    NavbarComponent,
    AddBlogpostComponent,
    AddUploadComponent,
    NewslettersListComponent,
    PdfComponentComponent,
    RemoveBlogpostComponent,
    RemoveBrothersComponent
  ],
  imports: [
  BrowserModule,
  FullCalendarModule,
  RouterModule.forRoot([
    {path: '', component: HomeComponent},
    {path: 'about-us', component: AboutUsComponent},
	  {path: 'gallery', component: GalleryComponent},
	  {path: 'newsletter', component: NewsletterComponent},
	  {path: 'donations', component: DonationsComponent},
	  {path: 'scholarship', component: ScholarshipComponent},
	  {path: 'interest', component: InterestComponent},
	  {path: 'philanthropy', component: PhilanthropyComponent},
	  {path: 'brothers', component: BrothersComponent},
    {path: 'sign-in', component: SignInComponent},
    {path: 'admin', component: AdminComponent, canActivate: [AuthenticationGuard]}
  ]),
  AngularFireModule.initializeApp(environment.firebaseConfig),
  AngularFireDatabaseModule,
  PdfViewerModule,
  ReactiveFormsModule,
  AngularFireAuthModule,
  MDBBootstrapModule.forRoot(),
  AngularFireStorageModule,
  FormsModule 
  
],
  providers: [AuthenticationService, AuthenticationGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }

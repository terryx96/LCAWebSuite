import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

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
import { FormsModule } from '@angular/forms';


import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { environment } from '../environments/environment';


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
    BrothersComponent
  ],
  imports: [
  BrowserModule,
  FullCalendarModule,
  FormsModule,
  RouterModule.forRoot([
    {path: 'home', component: HomeComponent},
    {path: 'about-us', component: AboutUsComponent},
	  {path: 'gallery', component: GalleryComponent},
	  {path: 'newsletter', component: NewsletterComponent},
	  {path: 'donations', component: DonationsComponent},
	  {path: 'scholarship', component: ScholarshipComponent},
	  {path: 'interest', component: InterestComponent},
	  {path: 'philanthropy', component: PhilanthropyComponent},
	  {path: 'brothers', component: BrothersComponent}
  ]),
  AngularFireModule.initializeApp(environment.firebaseConfig),
  AngularFireDatabaseModule
],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

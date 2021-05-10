import { Component, OnInit } from '@angular/core';
import Blogpost from '../models/blogpost';
import { DataService } from '../services/data/data.service';
import { CalendarOptions } from '@fullcalendar/angular'; // useful for typechecking
import googleCalendarPlugin from '@fullcalendar/google-calendar';
import dayGridPlugin from '@fullcalendar/daygrid'; // a plugin
import timeGridPlugin from '@fullcalendar/timegrid'; // a plugin
import listGridPlugin from '@fullcalendar/list'; // a plugin
import interactionPlugin from '@fullcalendar/interaction'; // a plugin
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  blogposts: any[] = [];
  dbpath: string = "/blogpost";

  constructor(private dataService: DataService) {
    this.dataService.setDbPath(this.dbpath);
  }

  ngOnInit(): void {
    this.dataService.getAll().valueChanges()
    .subscribe((blogposts: any) => {
      this.setBlogposts(blogposts);
    });
  }

  setBlogposts(blogposts: Blogpost[]){
    this.blogposts = blogposts;
  }

  calendarOptions: CalendarOptions = {
    // Single Calendar
    googleCalendarApiKey: environment.calendarConfig.apiKey,
    plugins: [ googleCalendarPlugin, dayGridPlugin, timeGridPlugin, listGridPlugin ],
    initialView: 'listWeek',   
    height: '600px', 
    titleFormat: { // will produce something like "Tuesday, September 18, 2018"
      month: 'short',
      day: 'numeric',
    },
    events: {
      googleCalendarId: environment.calendarConfig.calendarID,
      color: 'purple',   // an option!
      textColor: '#ffffff', // an option!
      className: 'my-event-1',
    },  
  };
}

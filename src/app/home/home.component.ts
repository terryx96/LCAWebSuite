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
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  blogposts: any[] = [];
  dbpath: string = "/blogpost";
  signedIn: string = localStorage.getItem("cookieLog")!;
  selectedBlogpost: Blogpost = new Blogpost();
  indexSelected: number = -1;

  constructor(private dataService: DataService) {
    this.dataService.setDbPath(this.dbpath);
  }

  ngOnInit(): void {
    this.dataService.getAll().snapshotChanges().pipe(
      map((changes: any) => 
        changes.map((c: any) => 
          ({ key: c.payload.key, ...c.payload.val() })
        ))
    )
    .subscribe((blogposts: any[]) => {
      this.setBlogposts(blogposts);
      console.log(this.blogposts)
    }, (error: any) => {
      console.log(error)
    });
  }

  openEditForm = (index: number) => {
    this.indexSelected = index;
    this.selectedBlogpost = this.blogposts[index];
  }

  closeEditForm = () => {
    this.indexSelected = -1;
  }

  setBlogposts(blogposts: Blogpost[]){
    this.blogposts = blogposts;
  }

  deleteBlogpost = (key: string) => {
    this.dataService.delete(key);
  }

  updateBlogpost = (key: string) => {
    this.dataService.update(key, this.selectedBlogpost);
    this.closeEditForm();
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

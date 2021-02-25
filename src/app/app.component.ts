import { Component } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/angular'; // useful for typechecking
import googleCalendarPlugin from '@fullcalendar/google-calendar';
import dayGridPlugin from '@fullcalendar/daygrid'; // a plugin
import timeGridPlugin from '@fullcalendar/timegrid'; // a plugin
import listGridPlugin from '@fullcalendar/list'; // a plugin
import interactionPlugin from '@fullcalendar/interaction'; // a plugin
import { environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  constructor() { }

  title = 'LCAValpo';

  calendarOptions: CalendarOptions = {
	// Single Calendar
	googleCalendarApiKey: environment.calendarConfig.apiKey,
	plugins: [ googleCalendarPlugin, dayGridPlugin, timeGridPlugin, listGridPlugin ],
	initialView: 'listWeek',
	height: '400px',
	aspectRatio: 0.5,
	
	events: {
		googleCalendarId: environment.calendarConfig.calendarID,
		color: 'purple',   // an option!
		textColor: '#ffffff', // an option!
		
		className: 'my-event-1',
	},
	
	
  };
}   

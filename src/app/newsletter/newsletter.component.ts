import { Component, OnInit } from '@angular/core';
import Entry from '../models/entry';
import Newsletter from '../models/newsletter';
import { DataService } from '../services/data/data.service';

@Component({
  selector: 'app-newsletter',
  templateUrl: './newsletter.component.html',
  styleUrls: ['./newsletter.component.css']
})
export class NewsletterComponent implements OnInit {

  newsletter: Newsletter = new Newsletter();

  newsletters: Newsletter[] = [];

  dbpath: string = "/newsletter";

  constructor(private dataService: DataService) {
    this.dataService.setDbPath(this.dbpath);
  }

  ngOnInit(): void {
    this.dataService.getAll()
      .subscribe((newsletters: any[]) => {
        this.setNewsletters(newsletters);
      });
  }

  saveNewsletter(): void {
    this.dataService.create(this.newsletter).then(() => {
      console.log("newsletter successfully created");
    })
  }

  setNewsletters(newsletters: Newsletter[]) {
    this.newsletters = newsletters;
  }

}

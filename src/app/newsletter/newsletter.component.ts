import { Component, OnInit } from '@angular/core';
import Newsletter from '../models/newsletter';
import { NewsletterService } from '../services/newsletter/newsletter.service';

@Component({
  selector: 'app-newsletter',
  templateUrl: './newsletter.component.html',
  styleUrls: ['./newsletter.component.css']
})
export class NewsletterComponent implements OnInit {

  newsletter: Newsletter = new Newsletter();

  newsletters: Newsletter[] = [];

  constructor(private newsletterService: NewsletterService) {}

  ngOnInit(): void {
    this.newsletterService.getAll()
      .subscribe(newsletters => {
        this.newsletters = newsletters;
        console.log(this.newsletters);
      });
  }

  saveNewsletter(): void {
    this.newsletterService.create(this.newsletter).then(() => {
      console.log("newsletter successfully created");
    })
  }

}

import { Component, OnInit } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
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
  filePath: string = "";

  constructor(private dataService: DataService, private afStorage: AngularFireStorage) {
    this.dataService.setDbPath(this.dbpath);
  }

  ngOnInit(): void {
    this.dataService.getAll().valueChanges()
      .subscribe((newsletters: any[]) => {
        this.setNewsletters(newsletters);
      });
  }

  upload(event: any) {    
    const file = event.target.files[0]
    const filepath = file.name;
    const ref = this.afStorage.ref(filepath);
    const task = ref.put(file);
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

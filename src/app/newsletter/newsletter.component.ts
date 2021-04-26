import { Component, OnInit } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import Newsletter from '../models/newsletter';
import { DataService } from '../services/data/data.service';
import { FileService } from '../services/file/file.service';
import { FileUpload } from '../services/file/FileUpload';

@Component({
  selector: 'app-newsletter',
  templateUrl: './newsletter.component.html',
  styleUrls: ['./newsletter.component.css']
})
export class NewsletterComponent implements OnInit {

  newsletter: Newsletter = new Newsletter();
  newsletters: Newsletter[] = [];
  dbpath: string = "/newsletter";
  pdfSrc: string = "https://www.gutenberg.org/files/98/old/2city12p.pdf";

  constructor(private fileService: FileService,
              private dataService: DataService,
              private afStorage: AngularFireStorage) {
  }

  ngOnInit(): void {
    this.dataService.setDbPath(this.dbpath);
  }

  setNewsletters(newsletters: Newsletter[]) {
    this.newsletters = newsletters;
  }

}

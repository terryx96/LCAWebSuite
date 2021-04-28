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
  dbpath: string = "/uploads";
  pdfSrc: string = "https://firebasestorage.googleapis.com/v0/b/lcavu-5d8db.appspot.com/o/uploads%2Fnovember.pdf?alt=media&token=3fd426e4-1b33-4fd1-8399-fa455666b045";

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

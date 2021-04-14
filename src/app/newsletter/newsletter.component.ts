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

  percentage: number | undefined;
  fileUpload: FileUpload | undefined;
  newsletter: Newsletter = new Newsletter();
  newsletters: Newsletter[] = [];
  dbpath: string = "/newsletter";
  filePath: string = "";

  constructor(private fileService: FileService, private afStorage: AngularFireStorage) {
  }

  ngOnInit(): void {
    
  }

  upload(event: any) {    
    const file = event.target.files[0]
    this.fileUpload = new FileUpload(file);
    this.fileService.upload(this.fileUpload);
  }

  setNewsletters(newsletters: Newsletter[]) {
    this.newsletters = newsletters;
  }

}

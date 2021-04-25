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
  pdfSrc: string = "gs://lcavu-5d8db.appspot.com/uploads/MATH 321 HW8.pdf";

  constructor(private fileService: FileService,
              private dataService: DataService,
              private afStorage: AngularFireStorage) {
  }

  ngOnInit(): void {
    this.dataService.setDbPath(this.dbpath);
    this.dataService.getAll().valueChanges().subscribe()
  }

  upload(event: any) {    
    const file = event.target.files[0]
    this.fileUpload = new FileUpload(file);
    this.fileService.upload(this.fileUpload).subscribe(
      (percentage: number) => {
        this.percentage = Math.round(percentage);
      },
      (error: any) => {
        console.log(error)
      }
    )
  }

  setNewsletters(newsletters: Newsletter[]) {
    this.newsletters = newsletters;
  }

}

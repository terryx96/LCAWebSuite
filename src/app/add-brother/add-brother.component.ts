import { Component, OnInit } from '@angular/core';
import Brother from '../models/brother';
import { DataService } from '../services/data/data.service';
import { FileService } from '../services/file/file.service';
import { FileUpload } from '../services/file/FileUpload';

@Component({
  selector: 'app-add-brother',
  templateUrl: './add-brother.component.html',
  styleUrls: ['./add-brother.component.css']
})
export class AddBrotherComponent implements OnInit {

  brother: Brother = new Brother();
  photoUpload: FileUpload | undefined;

  constructor(private dataService: DataService,
              private fileService: FileService) { }

  ngOnInit(): void {
    this.dataService.setDbPath("/brothers");
  }
  
  saveBrother(): void {
    this.dataService.create(this.brother);
  }

  onPictureUploaded(event: any) {
     const file = event.target.files[0];
     this.photoUpload = new FileUpload(file);
     this.fileService.upload(this.photoUpload);

  }

}

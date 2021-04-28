import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { DataService } from '../services/data/data.service';
import { FileService } from '../services/file/file.service';
import { FileUpload } from '../services/file/FileUpload';

@Component({
  selector: 'app-add-upload',
  templateUrl: './add-upload.component.html',
  styleUrls: ['./add-upload.component.css']
})
export class AddUploadComponent implements OnInit {

  percentage: number | undefined;
  fileUpload: FileUpload | undefined;

  formTemplate = new FormGroup({
    caption : new FormControl(''),
    imageUrl : new FormControl('')
  })

  constructor(private dataService: DataService,
              private fileService: FileService) { }

  ngOnInit(): void {
    this.dataService.setDbPath("/uploads")
  }

  upload(event: any) {    
    const file = event.target.files[0]
    this.fileUpload = new FileUpload(file);
    this.fileService.upload(this.fileUpload);
  }

}

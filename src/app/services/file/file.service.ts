import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { AngularFireStorage } from '@angular/fire/storage';
import { finalize } from 'rxjs/operators';
import { FileUpload } from './FileUpload';

@Injectable({
  providedIn: 'root'
})
export class FileService {

  private basePath = '/uploads';

  constructor(private db: AngularFireDatabase, private storage: AngularFireStorage) { }

  upload(fileUpload: FileUpload): any {
    const filePath = `${this.basePath}/${fileUpload.file.name}`;
    const storageRef = this.storage.ref(filePath);
    const uploadTask = this.storage.upload(filePath, fileUpload.file);

    storageRef.getDownloadURL().subscribe((downloadURL) => {
      fileUpload.url = downloadURL;
      fileUpload.name = fileUpload.file.name;
      this.saveFileData(fileUpload);
    })

    return uploadTask.percentageChanges();
  }
  
  private saveFileData(fileUpload: FileUpload): void {
    console.log(fileUpload)
    this.db.list(this.basePath).push(fileUpload);
  }


}

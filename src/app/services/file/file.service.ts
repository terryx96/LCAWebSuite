import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { AngularFireStorage, fromTask } from '@angular/fire/storage';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { FileUpload } from './FileUpload';

@Injectable({
  providedIn: 'root'
})
export class FileService {

  private basePath = '/uploads';
  private downloadURL: Observable<string> | undefined;
  public test: any;

  constructor(private db: AngularFireDatabase, private storage: AngularFireStorage) { }

  upload(fileUpload: FileUpload): any {
    const filePath = `${this.basePath}/${fileUpload.file.name}`;
    const storageRef = this.storage.ref(filePath);
    const uploadTask = this.storage.upload(filePath, fileUpload.file).then(() => {
      storageRef.getDownloadURL().subscribe((downloadURL) => {
        fileUpload.url = downloadURL;
        fileUpload.name = fileUpload.file.name + Date.now();
        this.saveFileData(fileUpload);
      })
    });
  }
  
  
  private saveFileData(fileUpload: FileUpload): void {
    console.log(fileUpload)
    this.db.list(this.basePath).push(fileUpload);
  }


}

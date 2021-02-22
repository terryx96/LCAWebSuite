import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  protected dbpath: string = "/";

  tableRef: AngularFireList<any>;

  entries: any[] = [];

  constructor(protected db: AngularFireDatabase) { 
    this.tableRef = db.list(this.dbpath);
  }

  setDbPath(path: string) {
    this.dbpath = path;
  }

  getAll() {
    console.log(this.tableRef)
    console.log(this.dbpath);
    return this.db.list(this.dbpath).valueChanges();
  }

  create(entry: any) {
    return this.tableRef.push(entry);
  }

}

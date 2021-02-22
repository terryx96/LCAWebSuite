import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  protected dbpath: string = "/";

  tableRef: AngularFireList<any>;

  constructor(protected db: AngularFireDatabase) { 
    this.tableRef = db.list(this.dbpath);
  }

  setDbPath(path: string) {
    this.dbpath = path;
  }

  getAll() {
    return this.db.list(this.dbpath).valueChanges();
  }

  create(entry: any) {
    return this.tableRef.push(entry);
  }

}

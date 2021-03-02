import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import Entry from '../../models/entry';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  protected dbpath: string = "/";

  tableRef: AngularFireList<Entry>;

  entries: Entry[] = [];

  constructor(protected db: AngularFireDatabase) { 
    this.tableRef = db.list(this.dbpath);
    console.log(this.tableRef); 
  }

  getAll(): any {
    return this.db.list(this.dbpath).valueChanges();
  }

  create(entry: Entry) {
    console.log(this.dbpath);
    return this.tableRef.push(entry);
  }

  getDbPath(): string {
    return this.dbpath;
  }

  setEntries(entries: any[]): void {
    this.entries = entries;
  }

  setDbPath(path: string): void {
    this.dbpath = path;
    this.tableRef = this.db.list(this.dbpath);
  }

}

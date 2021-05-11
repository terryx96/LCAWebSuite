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
  }

  getAll(): AngularFireList<Entry> {
    return this.tableRef;
  }

  create(entry: Entry) {
    return this.tableRef.push(entry);
  }

  getById(id: string) {
    return this.db.object(`${this.dbpath}/${id}`)
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

  delete(id: string) {
    this.tableRef.remove(id);
  }

  update = (key: string, data: Entry) => {
    this.tableRef.update(key, data);
  }

}

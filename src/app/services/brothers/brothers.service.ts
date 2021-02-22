import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';

import Brother from '../../models/brother';

@Injectable({
  providedIn: 'root'
})
export class BrothersService {

  private dbpath = '/brothers';

  brothersRef: AngularFireList<Brother>;

  brothers: Brother[] = [];

  constructor(private db: AngularFireDatabase) { 
    this.brothersRef = db.list(this.dbpath);
  }

  getAll() {
    return this.db.list(this.dbpath).valueChanges();
  }

  create(brother: Brother) {
    return this.brothersRef.push(brother);
  }

}

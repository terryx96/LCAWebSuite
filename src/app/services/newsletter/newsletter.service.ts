import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';

import Newsletter from 'src/app/models/newsletter';

@Injectable({
  providedIn: 'root'
})
export class NewsletterService {

  private dbpath = '/newsletter';

  newsletterRef: AngularFireList<Newsletter>;

  constructor(private db: AngularFireDatabase) { 
    this.newsletterRef = db.list(this.dbpath);
  }

  getAll() {
    return this.newsletterRef.valueChanges();
  }

  create(newsletter: Newsletter) {
    return this.newsletterRef.push(newsletter);
  }
}

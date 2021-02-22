import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';

import Blogpost from '../../models/blogpost';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  private dbpath = '/blogpost';

  blogpostRef: AngularFireList<Blogpost>;

  blogposts: any[] = [];

  constructor(private db: AngularFireDatabase) {
    this.blogpostRef = db.list(this.dbpath);
   }

   getAll() {
    return this.db.list(this.dbpath).valueChanges()
   }

   create(blogpost: Blogpost) {
     return this.blogpostRef.push(blogpost);
   }

   update(key: string, value: any): Promise<void> {
     return this.blogpostRef.update(key, value);
   }

   delete(key: string): Promise<void> {
     return this.blogpostRef.remove(key);
   }

}

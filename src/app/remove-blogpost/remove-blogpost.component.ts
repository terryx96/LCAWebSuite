import { Component, OnInit } from '@angular/core';
import Blogpost from '../models/blogpost';
import { DataService } from '../services/data/data.service';

@Component({
  selector: 'app-remove-blogpost',
  templateUrl: './remove-blogpost.component.html',
  styleUrls: ['./remove-blogpost.component.css']
})
export class RemoveBlogpostComponent implements OnInit {

  blogposts: any[] = [];
  dbpath: string = "/blogpost";

  constructor(private dataService: DataService) {
    this.dataService.setDbPath(this.dbpath);
  }

  ngOnInit(): void {
    this.dataService.getAll().valueChanges()
      .subscribe((blogposts: any) => {
        this.setBlogposts(blogposts);
      });
  }

  setBlogposts(blogposts: Blogpost[]) {
    this.blogposts = blogposts;
  }

deleteDatabase(titleee:string): void {
  console.log(titleee);   // The function returns the product of p1 and p2
}
}

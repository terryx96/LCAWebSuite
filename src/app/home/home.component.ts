import { Component, OnInit } from '@angular/core';
import Blogpost from '../models/blogpost';
import { DataService } from '../services/data/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  blogpost: Blogpost = new Blogpost();
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

  saveBlogpost(): void {
    this.dataService.create(this.blogpost).then(() => {
      console.log("new blog post created successfully");
    });
  }

  setBlogposts(blogposts: Blogpost[]){
    this.blogposts = blogposts;
  }


}

import { Component, OnInit } from '@angular/core';
import Blogpost from '../models/blogpost';
import { DataService } from '../services/data/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

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

  setBlogposts(blogposts: Blogpost[]){
    this.blogposts = blogposts;
  }


}

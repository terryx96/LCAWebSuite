import { Component, OnInit } from '@angular/core';
import Blogpost from '../models/blogpost';
import { DataService } from '../services/data/data.service';

@Component({
  selector: 'app-add-blogpost',
  templateUrl: './add-blogpost.component.html',
  styleUrls: ['./add-blogpost.component.css']
})
export class AddBlogpostComponent implements OnInit {

  blogpost: Blogpost = new Blogpost();

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.setDbPath("/blogpost")
  }

  saveBlogpost(): void {
    this.dataService.setDbPath("/blogpost");
    this.dataService.create(this.blogpost).then(() => {
      console.log("new blog post created successfully");
    });
  }

}

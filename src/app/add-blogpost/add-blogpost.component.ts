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
  }

  saveBlogpost(): void {
    this.dataService.create(this.blogpost).then(() => {
      console.log("new blog post created successfully");
    });
  }

}

import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-image-component',
  templateUrl: './image-component.component.html',
  styleUrls: ['./image-component.component.css']
})
export class ImageComponentComponent implements OnInit {

  formTemplate = new FormGroup({
    caption : new FormControl(''),
    imageUrl : new FormControl('')
  })

  constructor() { }

  ngOnInit(): void {
  }

}

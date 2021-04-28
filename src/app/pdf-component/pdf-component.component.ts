import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import Newsletter from '../models/newsletter';

@Component({
  selector: 'app-pdf-component',
  templateUrl: './pdf-component.component.html',
  styleUrls: ['./pdf-component.component.css']
})
export class PdfComponentComponent implements OnInit {

  @Input() newsletter: Newsletter = new Newsletter(); 

  constructor() { }

  ngOnInit(): void {
  }

}

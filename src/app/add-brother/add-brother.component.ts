import { Component, OnInit } from '@angular/core';
import Brother from '../models/brother';
import { DataService } from '../services/data/data.service';

@Component({
  selector: 'app-add-brother',
  templateUrl: './add-brother.component.html',
  styleUrls: ['./add-brother.component.css']
})
export class AddBrotherComponent implements OnInit {

  brother: Brother = new Brother();

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
  }
  
  saveBrother(): void {
    this.dataService.create(this.brother);
  }

}

import { Component, OnInit } from '@angular/core';
import Brother from '../models/brother';
import { DataService } from '../services/data/data.service';

@Component({
  selector: 'app-brothers',
  templateUrl: './brothers.component.html',
  styleUrls: ['./brothers.component.css']
})
export class BrothersComponent implements OnInit {

  dbpath: string = "/brothers";

  constructor(private dataService: DataService) {
    this.dataService.setDbPath(this.dbpath);
  }

  ngOnInit(): void {

  }

  deleteBrother(id: string): void {
    console.log(id);
    this.dataService.delete(id);
  }



}

import { Component, OnInit } from '@angular/core';
import Brother from '../models/brother';
import { DataService } from '../services/data/data.service';

@Component({
  selector: 'app-brothers',
  templateUrl: './brothers.component.html',
  styleUrls: ['./brothers.component.css']
})
export class BrothersComponent implements OnInit {

  brother: Brother = new Brother();
  brothers: Brother[] = [];
  dbpath: string = "/brothers";

  constructor(private dataService: DataService) {
    this.dataService.setDbPath(this.dbpath);
  }

  ngOnInit(): void {
    this.dataService.getAll()
      .subscribe((brothers: any[]) => {
        this.setBrothers(brothers);
      });
  }

  saveBrother(): void {
    this.dataService.create(this.brother).then(() => {
      console.log("new brother successfully created");
    });
  }

  setBrothers(brothers: Brother[]) {
    this.brothers = brothers;
  }

}

import { Component, OnInit } from '@angular/core';
import Brother from '../models/brother';
import { DataService } from '../services/data/data.service';
import { map } from 'rxjs/operators';

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
    console.log(this.dataService.getDbPath())
    this.dataService.getAll().snapshotChanges().pipe(
        map((changes: any) => 
          changes.map((c: any) => 
            ({ key: c.payload.key, ...c.payload.val() })
          ))
      )
      .subscribe((brothers: any[]) => {
        this.setBrothers(brothers);
      }, (error: any) => {
        console.log(error)
      });

  }

  getById(id: string) {
    return this.brothers.filter(brother => {
      return brother.key == id;
    })
  }

  deleteBrother(id: string): void {
    this.dataService.delete(id);
  }

  saveBrother(): void {
    this.dataService.create(this.brother);
  }

  setBrothers(brothers: Brother[]) {
    this.brothers = brothers;
  }

}

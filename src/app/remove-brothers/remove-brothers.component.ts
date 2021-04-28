import { Component, OnInit } from '@angular/core';
import Brother from '../models/brother';
import { DataService } from '../services/data/data.service';
import { map } from 'rxjs/operators';
import Blogpost from '../models/blogpost';

@Component({
  selector: 'app-remove-brothers',
  templateUrl: './remove-brothers.component.html',
  styleUrls: ['./remove-brothers.component.css']
})
export class RemoveBrothersComponent implements OnInit {

  brothers: Blogpost[] = [];

  constructor(private dataService: DataService) {
  }

  ngOnInit(): void {
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

  setBrothers(brothers: Brother[]) {
    this.brothers = brothers;
  }

}

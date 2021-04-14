import { Component, OnInit } from '@angular/core';
import Brother from '../models/brother';
import { DataService } from '../services/data/data.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-brothers-list',
  templateUrl: './brothers-list.component.html',
  styleUrls: ['./brothers-list.component.css']
})
export class BrothersListComponent implements OnInit {

  brothers: Brother[] = [];

  constructor(private dataService: DataService) { }

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

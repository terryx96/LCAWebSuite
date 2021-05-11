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
  currentBrother: Brother = new Brother();
  editMode: boolean = false; 
  indexSelected: number = -1;

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
      console.log(this.brothers)
    }, (error: any) => {
      console.log(error)
    });
  } 

  setBrothers(brothers: Brother[]) {
    this.brothers = brothers;
  }

  deleteBrother = (key: string) => {
    this.dataService.delete(key);
  }

  updateBrother = (key: string) => {
    this.dataService.update(key, this.currentBrother);
    this.closeEditForm()
  }

  openEditForm = (index: number) => {
    this.indexSelected = index; 
    this.currentBrother = this.brothers[index];
  }

  closeEditForm = () => {
    this.indexSelected = -1;
  }

}

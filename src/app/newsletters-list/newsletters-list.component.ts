import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import Newsletter from '../models/newsletter';
import { DataService } from '../services/data/data.service';

@Component({
  selector: 'app-newsletters-list',
  templateUrl: './newsletters-list.component.html',
  styleUrls: ['./newsletters-list.component.css']
})
export class NewslettersListComponent implements OnInit {

  newsletters: Newsletter[] = [];
  pdfSrc = "https://firebasestorage.googleapis.com/v0/b/lcavu-5d8db.appspot.com/o/uploads%2Fnovember.pdf?alt=media&token=3fd426e4-1b33-4fd1-8399-fa455666b045";

  constructor(private dataService: DataService) { 
    this.dataService.setDbPath("/uploads")
  }

  ngOnInit(): void {
    this.dataService.getAll().snapshotChanges().pipe(
      map((changes: any) => 
        changes.map((c: any) => 
          ({ key: c.payload.key, ...c.payload.val() })
        ))
    )
    .subscribe((newsletters: any[]) => {
      this.setNewsletters(newsletters);
    }, (error: any) => {
      console.log(error)
    });

  }

  setNewsletters(newsletters: Newsletter[]) {
    this.newsletters = newsletters;
  }

}

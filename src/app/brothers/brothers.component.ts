import { Component, OnInit } from '@angular/core';
import Brother from '../models/brother';
import { BrothersService } from '../services/brothers/brothers.service';


@Component({
  selector: 'app-brothers',
  templateUrl: './brothers.component.html',
  styleUrls: ['./brothers.component.css']
})
export class BrothersComponent implements OnInit {

  brother: Brother = new Brother();

  brothers: any[] = [];

  constructor(private brotherService: BrothersService) {}

  ngOnInit(): void {
    this.brotherService.getAll()
      .subscribe(brothers => {
        this.brothers = brothers;
        console.log(this.brothers)
      });
  }

  saveBrother(): void {
    this.brotherService.create(this.brother).then(() => {
      console.log("new brother successfully created")
    });
  }

}

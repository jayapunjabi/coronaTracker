import { Component, OnInit } from '@angular/core';
import { DataService  }  from 'src/app/services/data.service';


@Component({
  selector: 'app-india-count',
  templateUrl: './india-count.component.html',
  styleUrls: ['./india-count.component.scss']
})
export class IndiaCountComponent implements OnInit {

  indiaStat: any;
  colls: any[];
  loading = true;
  constructor(private dataService: DataService) { }


  ngOnInit() {
    this.dataService.getIndiaCount().subscribe((res) => {
      this.indiaStat = res;
      console.log('India', this.indiaStat);
      this.loading = false;
    });
    this.colls = [{ field: 'active_cases' }];
  }

}

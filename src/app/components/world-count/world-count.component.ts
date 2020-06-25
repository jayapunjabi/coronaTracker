import { Component, OnInit } from '@angular/core';
import { DataService  }  from 'src/app/services/data.service';

@Component({
  selector: 'app-world-count',
  templateUrl: './world-count.component.html',
  styleUrls: ['./world-count.component.scss']
})
export class WorldCountComponent implements OnInit {

  worldStat: any;
  colls: any[];
  loading = true;
  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getWorldCount().subscribe((res) => {
      this.worldStat = res;
      console.log('WORLD', this.worldStat);
    });
    this.colls = [{ field: 'active_cases' }];
  }

}

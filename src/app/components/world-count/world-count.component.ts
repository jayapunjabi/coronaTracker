import { Component, OnInit } from '@angular/core';
import { DataService  }  from 'src/app/services/data.service';
import {Chart} from 'chart.js';
import { runInThisContext } from 'vm';

@Component({
  selector: 'app-world-count',
  templateUrl: './world-count.component.html',
  styleUrls: ['./world-count.component.scss']
})
export class WorldCountComponent implements OnInit {


World: any[] = [];
  Count: any[] = [];
  barchart: [];
  worldStat: any;
  colls: any[];
  xaxis : String[] = [];
  yaxis: Int16Array[] =[];
  loading = true;
  constructor(private dataService: DataService) { }

  ngOnInit() {

    this.dataService.getWorldCount().subscribe((res) => {
      this.worldStat = res;
      console.log('WORLD', this.worldStat);
    });

    this.colls = [{ field: 'active_cases' }];

    this.dataService.getWorldCount().subscribe((res) => {
      this.worldStat = res;
      let i = 0;
      for(var x in this.worldStat){
          this.xaxis[i] = x;
          this.yaxis[i++] = this.worldStat[x].replace(',','').replace(',','');
      }
      this.barchart = new Chart('canvas', {  
        type: 'doughnut',  
        data: {  
          labels: this.xaxis,  
          datasets: [  
            {  
              data: this.yaxis,  
              borderColor: '#3cba9f',  
              backgroundColor: [  
                "Red",  
                "Red",  
                "#9966FF",  
                "#4C4CFF",  
                "#00FFFF",  
                "#f990a7",  
                "#aad2ed",  
                "#FF00FF",  
                "Blue",  
                "Red",  
                "Blue"  
              ],  
              fill: true  
            }  
          ]  
        },  
        options: {  
          legend: {  
            display: true  
          },  
          scales: {  
            xAxes: [{  
              display: false  
            }],  
            yAxes: [{  
              display: false  
            }],  
          }  
        }  
      });  
    });  
  

}
}

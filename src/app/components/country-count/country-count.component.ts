import { Component, OnInit } from '@angular/core';
import { DataService  }  from 'src/app/services/data.service';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { ListService } from 'src/app/services/list.service';
import {Chart} from 'chart.js';

@Component({
  selector: 'app-country-count',
  templateUrl: './country-count.component.html',
  styleUrls: ['./country-count.component.scss']
})
export class CountryCountComponent implements OnInit {


  Country: any[] = [];
  Count: any[] = [];
  Linechart: [];
  countryStat: any;
  cols: any[];
  colls: any[];
  globalStat: any;
  first = 0;
  rows = 12;
  selectedValues: any[];
  loading = true;
  messageService: any;
  oneCountry: any;
  data: any[];
  msgs: Message[] = [];
  country: string;
  cases: string;
  c1 = [];
  c2 = [];
  constructor(private dataService:DataService , private listData: ListService) { }
  confirm1(selectedItem : any)
   {
    this.country = selectedItem.country_name;
    
    console.log('Country', this.country);
  
    this.c1.push(this.country);
    this.c2 = this.c1;
    console.log('Array', this.c2);
    this.listData.updateData(this.c2);
  }

  ngOnInit(): void {

    this.listData.currentMessage.subscribe(() => this.country = this.country);
  
this.dataService.getCountryData().subscribe((res: any) => {
  this.countryStat = res.countries_stat;
  console.log('country', this.countryStat);
  this.loading = false
});

this.dataService.getCountryData().subscribe((res: any) => {

  this.countryStat = res.countries_stat;
   this.countryStat.map(x => {  

    this.Country.push(x.country_name);
     this.Count.push(x.cases.replace(',','').replace(',',''));
  }); 
 
  this.Linechart = new Chart('canvas', {  
    type: 'line',  
    data: {  
      labels: this.Country,  
      datasets: [  
        {  
          data: this.Count,  
          borderColor: '#3cb371',  
          backgroundColor: "#0000FF",  
        }  
      ]  
    },  
    options: {  
      legend: {  
        display: false  
      },  
      scales: {  
        xAxes: [{  
          display: true,
          
        }],  
        yAxes: [{  
          display: true,
         
        }],  
      }  
    }  
  });
  console.log('country', this.countryStat);
  this.loading = false
});

this.colls = [{ field: 'active_cases' }];
this.cols = [
  { field: 'country_name', header: 'Country' },
  { field: 'cases', header: 'Cases' },
  { field: 'deaths', header: 'Deaths' },
  { field: 'total_recovered', header: 'Recovered' },
  { field: 'new_cases', header: 'New Cases today' },
  { field: 'new_deaths', header: 'New Deaths today' },
];
}

scrollto(dest:string){
const el: HTMLElement|null = document.getElementById(dest);
if (el) {
  setTimeout(() =>
    el.scrollIntoView({behavior: 'smooth', block: 'center', inline: 'nearest'}), 0);
}
}
next() {
this.first = this.first + this.rows;
}
prev() {
this.first = this.first - this.rows;
}
reset() {
this.first = 0;
}
isLastPage(): boolean {
return this.first === (this.countryStat.length - this.rows);
}
isFirstPage(): boolean {
return this.first === 0;
}
}
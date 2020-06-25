import { Component, OnInit } from '@angular/core';
import { DataService  }  from 'src/app/services/data.service';



@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  
  globalStat : any;
  countryStat: any;
  cols: any[];

  first=0;
  rows=12;
  loading = true;

  constructor( private dataService : DataService) { }

  ngOnInit()  {

    this.dataService.getGlobalData().subscribe((res)=>{
      this.globalStat = res;
      console.log('global', this.globalStat);

    });
    
    this.dataService.getCountryData().subscribe((res: any) => {
      this.countryStat = res.countries_stat;
      console.log('country', this.countryStat);
      this.loading = false
    });

    this.cols = [

    { field: 'country_name' , header: 'Country'},
    { field: 'cases' , header: 'Cases'},
    { field: 'deaths' , header: 'Deaths'},
    { field: 'total_recovered' , header: 'Recovered'},
    { field: 'new_cases' , header: 'New Cases Today'},
    { field: 'new_deaths' , header: 'New Deaths Today'},
    
    ];
  }

  scrollto(dest:string){
    const el: HTMLElement|null = document.getElementById(dest);
    if (el) {
      setTimeout(() =>
        el.scrollIntoView({behavior: 'smooth', block: 'center', inline: 'nearest'}), 0);
    }
  }

  next(){
    this.first = this.first+ this.rows;
  }

  reset(){
    this.first = 0;

  }

  isLastPage(): boolean{
    return this.first ===(this.countryStat.lenght - this.rows);

  }

  isFirstPage(): boolean{
    return this.first === 0;
  }

}

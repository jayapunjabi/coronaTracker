import { Component, OnInit } from '@angular/core';
import { ListService } from 'src/app/services/list.service';

@Component({
  selector: 'app-my-list',
  templateUrl: './my-list.component.html',
  styleUrls: ['./my-list.component.scss']
})
export class MyListComponent implements OnInit {


  loading = true;
  c = [];
  country: [];
  
  constructor(private shared: ListService) { }

  ngOnInit() {

    this.shared.currentMessage.subscribe(country => this.country = country);
    this.c.push(this.country);
    console.log(Array, this.c);

    
  }
  deleteRow(id: any) {
    for (let i = 0; i < this.country.length; i++) {
      if (this.country[i] === id) {
        this.country.splice(i, 1);
      }
    }
  }
}

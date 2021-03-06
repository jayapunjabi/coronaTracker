import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  CountryWiseStatURL = 'https://coronavirus-monitor.p.rapidapi.com/coronavirus/cases_by_country.php'
  worldStatURL = 'https://coronavirus-monitor.p.rapidapi.com/coronavirus/worldstat.php'
  IndiaStatURL = "https://api.covid19india.org/state_district_wise.json";
  constructor(private httpClient: HttpClient) { }

  getGlobalData() {
    const headers = {
      headers: new HttpHeaders({
        "x-rapidapi-host": "coronavirus-monitor.p.rapidapi.com",
        "x-rapidapi-key": "49251608a4msh0ee9f3db2bc5bf4p1ad75ejsn318a3a643c91"
      })
    }

    return this.httpClient.get(this.worldStatURL, headers)
  }

  getCountryData() {
    const headers = {
      headers: new HttpHeaders({
        "x-rapidapi-host": "coronavirus-monitor.p.rapidapi.com",
        "x-rapidapi-key": "49251608a4msh0ee9f3db2bc5bf4p1ad75ejsn318a3a643c91"
      })
    }

    return this.httpClient.get(this.CountryWiseStatURL, headers)
  }

  getWorldCount() {
    const headers = {
      headers: new HttpHeaders({
        'x-rapidapi-host': 'coronavirus-monitor.p.rapidapi.com',
        'x-rapidapi-key': '7990b1ced6mshb4f5d6ce58f7ab3p1fc4c7jsn8a425388c252'
      })
    };
    return this.httpClient.get(this.worldStatURL, headers);

  }

  getIndiaCount() {
    return this.httpClient.get(this.IndiaStatURL);
  }

}

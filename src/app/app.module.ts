import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './components/main/main.component';
import {TableModule} from 'primeng/table';
import { HttpClientModule } from '@angular/common/http';
import { DataService  }  from './services/data.service';
import { CountryCountComponent } from './components/country-count/country-count.component';
import { WorldCountComponent } from './components/world-count/world-count.component';
import { IndiaCountComponent } from './components/india-count/india-count.component';
import { HeaderComponent } from './components/header/header.component';

import { FooterComponent } from './components/footer/footer.component';





@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    CountryCountComponent,
    WorldCountComponent,
    IndiaCountComponent,
    HeaderComponent,
  
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TableModule,
    HttpClientModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { WorldCountComponent } from './components/world-count/world-count.component';
import { CountryCountComponent } from './components/country-count/country-count.component';
import { IndiaCountComponent } from './components/india-count/india-count.component';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: MainComponent },
  { path: 'worldcounter', component: WorldCountComponent },
  { path: 'countrycounter', component: CountryCountComponent },
  { path: 'indiacounter', component: IndiaCountComponent }    
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

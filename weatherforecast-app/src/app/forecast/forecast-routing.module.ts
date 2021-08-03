import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DaysForecastComponent } from './days-forecast/days-forecast.component';


const routes: Routes = [{ path: '', component: DaysForecastComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ForecastRoutingModule { }

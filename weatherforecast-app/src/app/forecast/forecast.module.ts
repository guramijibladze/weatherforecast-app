import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ForecastRoutingModule } from './forecast-routing.module';
import { DaysForecastComponent } from './days-forecast/days-forecast.component';



@NgModule({
  declarations: [
  
    DaysForecastComponent
  ],
  imports: [
    CommonModule,
    ForecastRoutingModule
  ]
})
export class ForecastModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ForecastRoutingModule } from './forecast-routing.module';
import { DaysForecastComponent } from './days-forecast/days-forecast.component';
import { API_URL, ServiceService } from '../services/service.service';
import { environment } from 'src/environments/environment';



@NgModule({
  declarations: [
    DaysForecastComponent
  ],
  imports: [
    CommonModule,
    ForecastRoutingModule
  ],
  providers:[
    ServiceService,
    {
      provide: API_URL,
      useValue: environment.nameApi
    }
  ]
})
export class ForecastModule { }

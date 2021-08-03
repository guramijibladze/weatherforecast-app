import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodayDetailRoutingModule } from './today-detail-routing.module';
import { ForecastDetailComponent } from './forecast-detail/forecast-detail.component';



@NgModule({
  declarations: [
  
    ForecastDetailComponent
  ],
  imports: [
    CommonModule,
    TodayDetailRoutingModule
  ]
})
export class TodayDetailModule { }

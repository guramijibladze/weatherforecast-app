import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodayDetailRoutingModule } from './today-detail-routing.module';
import { ForecastDetailComponent } from './forecast-detail/forecast-detail.component';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { API_URL, ServiceService } from '../services/service.service';
import { environment } from 'src/environments/environment';



@NgModule({
  declarations: [
    ForecastDetailComponent
  ],
  imports: [
    CommonModule,
    TodayDetailRoutingModule,
    AngularSvgIconModule
  ],
  providers:[
    ServiceService,
    {
      provide: API_URL,
      useValue: environment.nameApi
    }]
})
export class TodayDetailModule { }

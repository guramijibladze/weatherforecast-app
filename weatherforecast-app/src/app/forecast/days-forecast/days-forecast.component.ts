import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/services/service.service';
import { DaysForecastFacade } from './days-forecast.facade';

@Component({
  selector: 'app-days-forecast',
  templateUrl: './days-forecast.component.html',
  styleUrls: ['./days-forecast.component.scss'],
  providers: [ DaysForecastFacade ]
})
export class DaysForecastComponent implements OnInit {

  constructor(
    private getweatherservice:ServiceService,
    private getpositonfacade: DaysForecastFacade
  ) { }

  getCurrentLocation(){
    this.getpositonfacade.getPosition().then(pos=>
      {
        this.getWeatherForecast(pos.lon, pos.lat);
      });
      
  }

  getWeatherForecast(lon,lat){
    this.getweatherservice.getWeatherForecast(lon,lat).subscribe(x => console.log(x))
  }

  ngOnInit(): void {
    this.getCurrentLocation()
  }

}

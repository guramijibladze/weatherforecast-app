import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/services/service.service';
import { DaysForecastFacade } from './days-forecast.facade';
import { Hourlyforecast } from '../days-forecast.model';


@Component({
  selector: 'app-days-forecast',
  templateUrl: './days-forecast.component.html',
  styleUrls: ['./days-forecast.component.scss'],
  providers: [ DaysForecastFacade ]
})
export class DaysForecastComponent implements OnInit {
  _weatherByHourlyforecast: Hourlyforecast;
  icon
  time
  // icons$: Observable<boolean>;

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
    this.getweatherservice.getWeatherForecast(lon,lat)
    .subscribe(x => {
      this._weatherByHourlyforecast = x;
      this.time = this._weatherByHourlyforecast.list[0].dt_txt.slice(10, 16)
      this.icon = x.list[0].weather[0].icon
    })
  }

  getWeatherForecastIcon(){
    this.getweatherservice.getWeatherIcon(this.icon).subscribe(x=>console.log(x))
  }

  ngOnInit(): void {
    this.getCurrentLocation(),
    this.getWeatherForecastIcon()
  }

}

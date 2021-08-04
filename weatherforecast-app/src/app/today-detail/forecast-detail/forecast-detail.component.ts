import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/services/service.service';
import { map } from 'rxjs/operators';
import { WeatherByLocationView } from '../forecast.model';
import { ForecastDetailFacade } from './forecast-detail.facade';

@Component({
  selector: 'app-forecast-detail',
  templateUrl: './forecast-detail.component.html',
  styleUrls: ['./forecast-detail.component.scss'],
  providers: [ ForecastDetailFacade ]
})
export class ForecastDetailComponent implements OnInit {
  hours
  minutes
  weekDay
  month
  today: number
  hasError: boolean
  _weatherByLocation: WeatherByLocationView;


  constructor(
      private getweatherservice: ServiceService,
      private facade: ForecastDetailFacade
    ) { }

  getCurrentDate(){
    setInterval(() => {
      this.today = Date.now();
      this.hours = new Date().getHours();
      if( this.hours >= 20 || this.hours <= 7){
        this.hasError = true
      }else{
        this.hasError = false
      }
      console.log(this.hours)
      this.minutes = new Date().getMinutes();
    }, 1000)

    
    this.weekDay = new Date().getDay();
    this.month = new Date().getMonth()
  }


  get currentDay():string{
    return this.facade.getWeekDay(this.weekDay)
  }

  get currentMonth():string{
    return this.facade.getMonth(this.month)
  }

  getCurrentLocation(){
    this.getweatherservice.getPosition().then(pos=>
      {
        this.getResult(pos.lon, pos.lat);
      });
      
  }


  getResult(lon, lat){
    const res$ = this.getweatherservice.getWeather(lon, lat)
      .pipe(map((x) => {
        // console.log(x)
        return {
          date: x.dt,
          main: x.main,
          citiName: x.name,
         
          countryIndex: x.sys,
          weather: x.weather,
          wind: x.wind,
          clouds: x.clouds,
          // rain: x.rain
        }
      }))
      .subscribe(x => this._weatherByLocation = x)
  }
  

  ngOnInit(): void {
    this.getCurrentDate()
    this.getCurrentLocation()
    
  }

}

import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/services/service.service';
import { finalize, map } from 'rxjs/operators';
import { WeatherByLocationView } from '../forecast.model';
import { ForecastDetailFacade } from './forecast-detail.facade';
import { LoadingService } from 'src/app/services/loading.service';

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
  interval

  _weatherByLocation: WeatherByLocationView;


  constructor(
      private getweatherservice: ServiceService,
      private facade: ForecastDetailFacade,
      private loadingservice: LoadingService
    ) { }

  getCurrentDate(){
    
     this.interval = setInterval(() => {
      this.today = Date.now();
      this.hours = new Date().getHours();
      if( this.hours >= 20 || this.hours <= 7){
        this.hasError = true
      }else{
        this.hasError = false
      }
      // console.log(this.hours)
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
    this.facade.getPosition().then(pos=>
      {
        this.getResult(pos.lon, pos.lat);
      });
      
  }


  getResult(lon, lat){
    this.loadingservice.start();
    const res$ = this.getweatherservice.getWeather(lon, lat)
      .pipe(finalize(() => {
        this.loadingservice.stop();
      })
        ,map((x) => {
        // console.log(x)
        return {
          date: x.dt,
          main: x.main,
          citiName: x.name,
          countryIndex: x.sys,
          weather: x.weather,
          wind: x.wind,
          clouds: x.clouds,
        }
      }))
      .subscribe(x => this._weatherByLocation = x)
  }
  

  ngOnInit(): void {
    
    this.getCurrentDate()
    this.getCurrentLocation()
    
  }

  ngOnDestroy(){
    if(this.interval){
      clearInterval(this.interval);
    }
  }

}

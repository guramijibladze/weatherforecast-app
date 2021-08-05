import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/services/service.service';
import { DaysForecastFacade } from './days-forecast.facade';
import { finalize, pluck } from 'rxjs/operators';
import { LoadingService } from 'src/app/services/loading.service';


@Component({
  selector: 'app-days-forecast',
  templateUrl: './days-forecast.component.html',
  styleUrls: ['./days-forecast.component.scss'],
  providers: [ DaysForecastFacade ]
})
export class DaysForecastComponent implements OnInit {
  FiveDaysForecastArr:any = []
  detail = []
  obj


  constructor(
    private getweatherservice:ServiceService,
    private getpositonfacade: DaysForecastFacade,
    private loadingservice: LoadingService
  ) { }

  
  getCurrentLocation(){
    this.getpositonfacade.getPosition().then(pos=>
      {
        this.getWeatherForecast(pos.lon, pos.lat);
      });
  }

  getWeatherForecast(lon,lat){
    this.loadingservice.start();
    this.getweatherservice.getWeatherForecast(lon,lat).pipe(
      finalize(() => {
        this.loadingservice.stop();
      }),
      pluck('list')
    )
    .subscribe(x => {
      this.FiveDaysForecast(x)
      this.forcastDetail(x)
      this.obj = x
    })
  }

  x:number = 0;
  y:number = 8;

  getChoosedateInfo(i){
    if(i == 0){
      this.x = 0
      this.y = 8
      this.forcastDetail(this.obj)
    
    }else if( i == 1){
      this.x = 8
      this.y = 16
      this.forcastDetail(this.obj)
   
    }else if( i == 2 ){
      this.x = 16
      this.y = 24
      this.forcastDetail(this.obj)
   
    }else if( i == 3 ){
      this.x = 24
      this.y = 32
      this.forcastDetail(this.obj)
    
    }else{
      this.x = 32
      this.y = 39
      this.forcastDetail(this.obj)
      
    }
  
  }

  day:string
  forcastDetail(arr){
    this.detail = arr.slice(this.x, this.y)
    this.day = this.detail[0].dt_txt 
  }

  FiveDaysForecast(date){
    for(let i = 0; i < date.length; i = i + 8 ){
      this.FiveDaysForecastArr.push(date[i])
    }
  }

  
  ngOnInit(): void {
    this.getCurrentLocation()
  }

}

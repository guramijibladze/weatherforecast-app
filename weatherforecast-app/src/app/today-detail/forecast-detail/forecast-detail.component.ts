import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/services/service.service';

@Component({
  selector: 'app-forecast-detail',
  templateUrl: './forecast-detail.component.html',
  styleUrls: ['./forecast-detail.component.scss']
})
export class ForecastDetailComponent implements OnInit {
  hours
  minutes
 

  constructor(private getweatherservice: ServiceService) { }

  getCurrentDate(){
    setInterval(() => {
      this.hours = new Date().getHours();
      this.minutes = new Date().getMinutes();
    }, 1000)

  }

  getCurrentLocation(){
    this.getweatherservice.getPosition().then(pos=>
      {
         console.log(`Positon: ${pos.lon} ${pos.lat}`);
      });
  }


  getResult(){
    const res$ = this.getweatherservice.getWeather().subscribe(x => console.log(x))
  }
  

  ngOnInit(): void {
    this.getCurrentDate()
    this.getCurrentLocation()
  }

}

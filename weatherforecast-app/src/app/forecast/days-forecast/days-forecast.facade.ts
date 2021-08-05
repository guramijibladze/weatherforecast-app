import { Injectable } from '@angular/core';


@Injectable()
export class DaysForecastFacade{

  weekDay: string[] = [ "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday" ]

getWeekDay(x){
        return this.weekDay[x]
    }
  
    getPosition(): Promise<any>
  {
    return new Promise((resolve, reject) => {

      navigator.geolocation.getCurrentPosition(resp => {

          resolve({lon: resp.coords.longitude, lat: resp.coords.latitude});
        },
        err => {
          reject(err);
        });
    });
  }


}
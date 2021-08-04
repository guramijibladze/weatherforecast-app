import { HttpClient } from '@angular/common/http';
import { Inject, Injectable, InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';
import { WeatherByLocation } from '../today-detail/forecast.model';

export const API_URL = new InjectionToken<string>('url token')

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(
    @Inject( API_URL ) private nameApi:string,
    private http: HttpClient
  ) { }

  getWeather(lon, lat):Observable<WeatherByLocation>{
    return this.http.get<WeatherByLocation>(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=e3cd3bcd0c2d19ff5867be6439e84351&units=metric`)
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

  // today forecast
  // https://api.openweathermap.org/data/2.5/weather?lat=41.7011336&lon=44.864474&appid=e3cd3bcd0c2d19ff5867be6439e84351


  // 5 day forecast
  // https://api.openweathermap.org/data/2.5/forecast?lat=41.7011336&lon=44.864474&appid=e3cd3bcd0c2d19ff5867be6439e84351

  // 'http://www.api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={8aa192e7acfbfb4d6ca8812ddf460e4c}'
  // getResult(category?:string):Observable<ApiBackEnd>{
  //   return this.http.get<ApiBackEnd>(`${this.nameApi}&t=${category}`)
  // }
}

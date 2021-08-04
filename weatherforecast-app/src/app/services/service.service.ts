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

  getWeatherForecast(lon, lat):Observable<any>{
    return this.http.get<any>(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=e3cd3bcd0c2d19ff5867be6439e84351`)
  }


  

}

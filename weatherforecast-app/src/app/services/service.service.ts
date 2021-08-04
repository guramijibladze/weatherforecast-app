import { HttpClient } from '@angular/common/http';
import { Inject, Injectable, InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';
import { Hourlyforecast } from '../forecast/days-forecast.model';
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

  getWeatherForecast(lon, lat):Observable<Hourlyforecast>{
    return this.http.get<Hourlyforecast>(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&cnt=8&appid=e3cd3bcd0c2d19ff5867be6439e84351&units=metric`)
  }

  getWeatherIcon(icon):Observable<any>{
    console.log(icon)
    return this.http.get<any>(`http://openweathermap.org/img/wn/${icon}@2x.png`)
  }


}

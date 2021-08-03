import { HttpClient } from '@angular/common/http';
import { Inject, Injectable, InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';

export const API_URL = new InjectionToken<string>('url token')

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(
    @Inject( API_URL ) private nameApi:string,
    private http: HttpClient
  ) { }

  getWeather():Observable<any>{
    return this.http.get<any>(`http://www.api.openweathermap.org/data/2.5/weather?lat={35}&lon={139}&appid={e3cd3bcd0c2d19ff5867be6439e84351}`)
  }

  // 'http://www.api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={8aa192e7acfbfb4d6ca8812ddf460e4c}'
  // getResult(category?:string):Observable<ApiBackEnd>{
  //   return this.http.get<ApiBackEnd>(`${this.nameApi}&t=${category}`)
  // }
}

import { Injectable } from '@angular/core';
import { Weather } from "./models/Weather";
import { Observable } from "rxjs";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class WeatherFetchService {
  API_KEY:string;
  
  constructor(private httpClient: HttpClient) {
    this.API_KEY = "4HdA0d5fEdAHMGFQWdbEo5lsoGAk5X8G";
  }

  getWeather(locationKey: number): Observable<any> {
    let url:string = `http://dataservice.accuweather.com/forecasts/v1/daily/5day/${locationKey}?apikey=${this.API_KEY}`;
    return this.httpClient.get<any>(url);
  }
}

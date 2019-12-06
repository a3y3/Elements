import { Injectable } from '@angular/core';
import { Weather } from "./models/Weather";

@Injectable({
  providedIn: 'root'
})
export class WeatherFetchService {

  constructor() { }

  getWeather(cityName: string): Weather[]{
    return [
      {
        city: cityName,
        date: "11/05/2019",
        high: 25,
        low: 12,
        windSpeed: 45,
        humidity: 70
      },
      {
        city: cityName,
        date: "12/05/2019",
        high: 25,
        low: 16,
        windSpeed: 20,
        humidity: 50
      },
      {
        city: cityName,
        date: "13/05/2019",
        high: 28,
        low: 10,
        windSpeed: 12,
        humidity: 60
      },
      {
        city: cityName,
        date: "14/05/2019",
        high: 225,
        low: 126,
        windSpeed: 220,
        humidity: 520
      }
    ];
  }
}

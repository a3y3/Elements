import { Component, OnInit } from '@angular/core';
import { Weather } from "../models/Weather";
import { WeatherFetchService } from "../weather-fetch.service";


@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
  weathers: Weather[];

  constructor(private weatherFetch:WeatherFetchService) { }

  ngOnInit() {
    this.changeCity(null);
  }

  changeCity($event): void {
    let city;
    if (!$event) {
      city = "Rochester";
    }
    else {
      city = $event.target.value;
    }
    this.loadWeather(city);
  }
  loadWeather(cityName: string): void {
    this.weathers = this.weatherFetch.getWeather(cityName);
  }
}

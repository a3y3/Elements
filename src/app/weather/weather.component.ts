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
  locationsMappings: {};

  constructor(private weatherFetch: WeatherFetchService) {
    this.locationsMappings = {
      "Rochester": 329674,
      'Somerville': 348735,
      "Seattle": 351409,
      "San Jose": 347630,
      "Miami": 347936,
    };
  }

  ngOnInit() {
    this.changeCity(null);
  }

  changeCity($event): void {
    let locationKey: number;
    if (!$event) {
      locationKey = this.locationsMappings["Rochester"];
    }
    else {
      locationKey = $event.target.value;
    }
    this.loadWeather(locationKey);
  }
  loadWeather(cityName: number): void {
    this.weatherFetch.getWeather(cityName).subscribe(data => {
      this.weathers = data.DailyForecasts;
    });
  }
}

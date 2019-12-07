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
  selectedCityName: string = "Rochester";
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
    const DEFAULT_CITY = "Rochester";
    let locationKey: number;
    if (!$event) {
      locationKey = this.locationsMappings[DEFAULT_CITY];
      this.selectedCityName = DEFAULT_CITY;
    }
    else {
      locationKey = $event.target.value;
      this.selectedCityName = $event.target.options[$event.target.options.selectedIndex].text;
    }
    this.loadWeather(locationKey);
  }

  loadWeather(cityName: number): void {
    this.weatherFetch.getWeather(cityName).subscribe(data => {
      this.weathers = data.DailyForecasts;
      console.log(this.weathers);
    });
  }
}

import { Component, OnInit } from '@angular/core';
import { Weather } from "../models/Weather";
@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
  weathers: Weather[];

  constructor() { }

  ngOnInit() {
    this.weathers = [
      {
        city: "Salem",
        date: "12/05/2019",
        high: 25,
        low: 12,
        windSpeed: 45,
        humidity: 70
      },
      {
        city: "Worcester",
        date: "12/05/2019",
        high: 25,
        low: 16,
        windSpeed: 20,
        humidity: 50
      },
      {
        city: "New York City",
        date: "13/05/2019",
        high: 28,
        low: 10,
        windSpeed: 12,
        humidity: 60
      },
      {
        city: "Chicago",
        date: "14/05/2019",
        high: 225,
        low: 126,
        windSpeed: 220,
        humidity: 520
      }
    ];
  }

}

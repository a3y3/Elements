import { Component, OnInit } from '@angular/core';
import { Weather } from "../models/Weather";
@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
  // forecasts: Weather[];

  constructor() { }

  ngOnInit() {
    
  }

}

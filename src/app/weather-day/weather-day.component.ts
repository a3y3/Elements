import { Component, OnInit, Input } from '@angular/core';
import { Weather } from '../models/Weather';

@Component({
  selector: 'app-weather-day',
  templateUrl: './weather-day.component.html',
  styleUrls: ['./weather-day.component.css']
})
export class WeatherDayComponent implements OnInit {

  @Input() weather: Weather;

  constructor() { }

  ngOnInit() {
  }

}

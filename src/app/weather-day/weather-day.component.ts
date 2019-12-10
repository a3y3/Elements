import { Component, OnInit, Input } from '@angular/core';
import { Weather } from '../models/Weather';
import * as moment from 'moment';


@Component({
  selector: 'app-weather-day',
  templateUrl: './weather-day.component.html',
  styleUrls: ['./weather-day.component.css']
})
export class WeatherDayComponent implements OnInit {

  @Input() weather: Weather;

  constructor() {
  }

  ngOnInit() {
    let date: string = this.weather.Date;
    let momentObj: moment.Moment = moment(date);
    this.weather.Date = momentObj.format('MMMM Do YYYY');
  }
}

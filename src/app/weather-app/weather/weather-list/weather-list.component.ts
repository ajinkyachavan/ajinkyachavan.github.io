import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';

import { WeatherItem } from '../weather-item/weather-item';
import { WEATHER_ITEMS } from '../weather.data';

import { WeatherItemComponent } from '../weather-item/weather-item.component';


@Component({
  selector: 'app-weather-list',
  templateUrl: './weather-list.component.html',
  styleUrls: ['./weather-list.component.css']
})
export class WeatherListComponent implements OnInit {

  weatherItems: WeatherItem[];

  constructor(private _weatherService: WeatherService) {

  }

  ngOnInit(): any{
      this.weatherItems = this._weatherService.getWeatherItems();
  }
}

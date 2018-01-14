import { Injectable } from '@angular/core';
import { WeatherItem } from './weather-item/weather-item';
import { WEATHER_ITEMS } from './weather.data';
import { Observable } from 'rxjs/Observable';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class WeatherService {

  constructor(private _http: Http) {}

  getWeatherItems(){
      return WEATHER_ITEMS;
  }

  addWeatherItem(weatherItem: WeatherItem){
      WEATHER_ITEMS.push(weatherItem);
  }

  searchWeatherData(cityName: string): Observable<any> {
      return this._http.get('http://api.openweathermap.org/data/2.5/weather?q=' + cityName + '&APPID=e64336c97a9654e4e21d11324cb5d430&units=metric')
      .map(response => response.json())
      .catch(error => {
          //console.error(error);
          return Observable.throw(error.json());
      });
  }

  clearWeatherItems(){
      WEATHER_ITEMS.splice(0);
  }

}

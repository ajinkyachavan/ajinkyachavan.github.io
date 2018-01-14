import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import {  WeatherService } from '../weather.service';
import {  WeatherItem } from '../weather-item/weather-item';
import {  Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';


@Component({
  selector: 'app-weather-search',
  templateUrl: './weather-search.component.html',
  styleUrls: ['./weather-search.component.css']
})
export class WeatherSearchComponent implements OnInit {

  location;
  currentCity;
  private searchStream = new Subject < string > ();
  data: any = {};

  constructor(private _weatherService: WeatherService) {}

  onSubmit(form: FormGroup) {

      this._weatherService.searchWeatherData(this.location)
          .subscribe(
              data => {
                  this.currentCity = data.name;
                  const weatherItem = new WeatherItem(data.name, data.weather[0].description, data.main.temp);
                  this._weatherService.addWeatherItem(weatherItem);
              }
          );

  }

  onSearchLocation(cityName: string) {
      this.location = cityName;
      this.searchStream
          .next(cityName);
  }

  ngOnInit() {
      this.searchStream
          .debounceTime(300)
          .distinctUntilChanged()
          .switchMap((input: string) => this._weatherService.searchWeatherData(input))
          .subscribe(
            data =>{  
                const mydata = data;
                this.location = mydata.name;
                //console.log(mydata.name);
                this.data = mydata.name;
            }
        );
  }
}

import { Component, OnInit } from '@angular/core';
import { WeatherItem } from '../weather/weather-item/weather-item';
import { WeatherService } from '../weather/weather.service';
import { ProfileService } from '../profile/profile.service';
import { Profile } from '../profile/profile.component';
import 'rxjs/add/operator/retry';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  profiles: Profile[];

  constructor(private _profileService: ProfileService, private _weatherService: WeatherService){   }

  onSaveNew(){
      const cities = this._weatherService.getWeatherItems().map(function(element: WeatherItem){
          return element.cityName;
      });
      this._profileService.saveNewProfile(cities);
  }

  onLoadProfile(profile){
      console.log('click ala');
      this._weatherService.clearWeatherItems();
      for(let i=0; i<profile.cities.length; i++){
          this._weatherService.searchWeatherData(profile.cities[i])
          .retry()
          .subscribe(
              data =>{
                  const weatherItem = new WeatherItem(data.name, data.weather[0].description, data.main.temp);
                  this._weatherService.addWeatherItem(weatherItem);
              }
          )
      }
  }

  onDeleteProfile(event, profile){
      event.stopPropagation();
      this._profileService.deleteProfile(profile);
  }

  ngOnInit(){
      this.profiles = this._profileService.getProfiles();
  }
}

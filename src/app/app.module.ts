import { SevenWondersService } from './seven-wonders/seven-wonders.service';
import { ProfileService } from './weather-app/profile/profile.service';
import { WeatherService } from './weather-app/weather/weather.service';
import { MyDirective } from './create-directive/directives/mydirective.directive';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';


import { AppComponent } from './app.component';
import { CreateDirectiveComponent } from './create-directive/create-directive.component';
import { WeatherAppComponent } from './weather-app/weather-app.component';
import { SidebarComponent } from './weather-app/sidebar/sidebar.component';
import { WeatherComponent } from './weather-app/weather/weather.component';
import { WeatherItemComponent } from './weather-app/weather/weather-item/weather-item.component';
import { WeatherListComponent } from './weather-app/weather/weather-list/weather-list.component';
import { WeatherSearchComponent } from './weather-app/weather/weather-search/weather-search.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { SevenWondersComponent } from './seven-wonders/seven-wonders.component';
import { YoutubePlayerModule } from 'ng2-youtube-player';
import {} from '@types/youtube';

import { AgmCoreModule } from '@agm/core';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [
    AppComponent,
    CreateDirectiveComponent,
    MyDirective,
    WeatherAppComponent,
    SidebarComponent,
    WeatherComponent,
    WeatherItemComponent,
    WeatherListComponent,
    WeatherSearchComponent,
    SevenWondersComponent

  ],
  imports: [
    BrowserModule,
    YoutubePlayerModule,
    CommonModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBCpZ7UDPTLXNaypNN_jiIkjpyMyk_3M8s'
    })
  ],
  providers: [WeatherService, ProfileService, SevenWondersService],
  bootstrap: [AppComponent],
  schemas: [ NO_ERRORS_SCHEMA ]

})
export class AppModule { }

import { RecipeService } from './recipe-app/recipes/recipe.service';
import { AuthGuard } from './recipe-app/auth/auth-guard.service';
import { AuthService } from './recipe-app/auth/auth.service';
import { SignupComponent } from './recipe-app/auth/signup/signup.component';
import { AuthModule } from './recipe-app/auth/auth.module';
import { ShoppingListModule } from './recipe-app/shopping-list/shopping-list.module';
import { SharedModule } from './recipe-app/shared/shared.module';
import { RecipesModule } from './recipe-app/recipes/recipes.modules';
import { AppRoutingModule } from './recipe-app/app-routing.module';
import { SevenWondersService } from './seven-wonders/seven-wonders.service';
import { ProfileService } from './weather-app/profile/profile.service';
import { WeatherService } from './weather-app/weather/weather.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';


import { AppComponent } from './app.component';
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
import { RecipeAppComponent } from './recipe-app/recipe-app.component';
import { HeaderComponent } from './recipe-app/header/header.component';
import { RecipesComponent } from './recipe-app/recipes/recipes.component';
import { ShoppingListComponent } from './recipe-app/shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './recipe-app/shopping-list/shopping-edit/shopping-edit.component';
import { RecipeDetailComponent } from './recipe-app/recipes/recipe-detail/recipe-detail.component';
import { RecipeListComponent } from './recipe-app/recipes/recipe-list/recipe-list.component';
import { RecipeItemComponent } from './recipe-app/recipes/recipe-list/recipe-item/recipe-item.component';
import { ShoppingListService } from './recipe-app/shopping-list/shopping-list.service';
import { DropdownDirective } from './recipe-app/shared/dropdown.directive';
import { SigninComponent } from './recipe-app/auth/signin/signin.component';
import { DataStorageService } from './recipe-app/shared/data-storage.service';


@NgModule({
  declarations: [
    AppComponent,
    WeatherAppComponent,
    SidebarComponent,
    WeatherComponent,
    WeatherItemComponent,
    WeatherListComponent,
    WeatherSearchComponent,
    SevenWondersComponent,
    RecipeAppComponent,
    HeaderComponent,
  


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
    }),
    AppRoutingModule,
    RecipesModule,
    SharedModule,
    ShoppingListModule,
    AuthModule
  ],
  providers: [WeatherService, ProfileService, SevenWondersService, RecipeService, ShoppingListService,
    DataStorageService, AuthService, AuthGuard],
  bootstrap: [AppComponent],
  schemas: [ NO_ERRORS_SCHEMA ]

})
export class AppModule { }
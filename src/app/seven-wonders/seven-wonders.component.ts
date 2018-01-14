import {  Component, OnInit, Input, Output } from '@angular/core';
import * as $ from 'jquery';
// Import the DataService
import {  SevenWondersService } from './seven-wonders.service';

@Component({
  selector: 'app-seven-wonders',
  templateUrl: './seven-wonders.component.html',
  styleUrls: ['./seven-wonders.component.css']
})
export class SevenWondersComponent implements OnInit {
  title = 'Listory';
  latitude = 51.678418;
  longitude = 7.809007;
  zoom = 4;

  id = '_00CC7BIHhg';
  private player;
  private ytEvent;
  width = 800;
  height = 400;
  imgSrc = '';


  // Define a users property to hold our user data
  users: Array <any>;

  // Create an instance of the DataService through dependency injection
  constructor(private _dataService: SevenWondersService) {

    // Access the Data Service's getUsers() method we defined
    this._dataService.getUsers()
      .subscribe(res => this.users = res);
  }


  ngOnInit(){
    this.latitude = 39.8282;
    this.latitude = -98.5795;
    this.zoom = 4;
    $('.yt_imgSrc').attr('src', 'https://i.ytimg.com/vi/_00CC7BIHhg/hqdefault.jpg?sqp=-oaymwEXCPYBEIoBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLDXCxoLxB4SIRH3_jd9cM7lz17Zog');


    this.setCurrentPosition();



    //sidebar behavior
    $(document).ready(function () {
      $('#sidebarCollapse').on('click', function () {
          $('#sidebar').toggleClass('active');
          $(this).toggleClass('active');

      });
    });




  }


  changeId(user){

    this.id = user.youtube_links;
    console.log(this.id);
    this.player.loadVideoById(this.id);
    $('.yt_imgSrc').attr('src', user.youtube_image);

  }

  private setCurrentPosition(newPosition: any = null) {
    //console.log(newPosition + " newPosition")
    if ("geolocation" in navigator && newPosition == null) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.latitude = position.coords.latitude;
        this.longitude = position.coords.longitude;
        this.zoom = 12;

      });
    } else {
      let myPosition = new Position();
      myPosition = newPosition;

      //console.log(newPosition.latitude, newPosition.longitude, " newPosition andar")

      this.latitude = myPosition.coords.latitude;
      this.longitude = myPosition.coords.longitude;
      this.zoom = 12;


    }
  }

  getLatLng(result){
    this.latitude = parseFloat(result.latitude);
    this.longitude = parseFloat(result.longitude);
    console.log(this.latitude+" "+this.longitude);
  }

  onStateChange(event) {
    this.ytEvent = event.data;
  }
  savePlayer(player) {
    this.player = player;
  }
  
  playVideo() {
    this.player.playVideo();
  }
  
  pauseVideo() {
    this.player.pauseVideo();
  }


}


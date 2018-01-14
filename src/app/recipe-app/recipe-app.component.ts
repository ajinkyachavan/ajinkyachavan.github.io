import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-recipe-app',
  templateUrl: './recipe-app.component.html',
  styleUrls: ['./recipe-app.component.css']
})
export class RecipeAppComponent implements OnInit {
  loadedFeature = 'recipe';

  ngOnInit() {
    firebase.initializeApp({
      apiKey: "AIzaSyCyxBmEyyINuuCUn0dkm5P2YKTu34y_CGQ",
      authDomain: "ng-receipe-book-sajid.firebaseapp.com"
    });
  }

  onNavigate(feature: string) {
    this.loadedFeature = feature;
  }
}

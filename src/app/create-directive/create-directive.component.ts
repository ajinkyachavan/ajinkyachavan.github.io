import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-directive',
  templateUrl: './create-directive.component.html',
  styleUrls: ['./create-directive.component.css']
})
export class CreateDirectiveComponent implements OnInit {

  title = 'app';

  loadPara = false;

  colors = ['blue', 'red', 'pink', 'yellow'];
  mycolor = 0;

  ngOnInit() {
  }

}

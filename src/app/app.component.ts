import {
  Component,
  OnInit
} from '@angular/core';

import * as $ from 'jquery';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  toggleMyApp = '';
  toggleContent = true;

  ngOnInit() {
    // $(document).ready(function () {
    //   $('#sidebarCollapse').on('click', function () {
    //     $('#sidebar').toggleClass('active');
    //     $(this).toggleClass('active');
    //     if(this.toggleContent){
    //       $('#content').css('min-width', '100vw');
    //       this.toggleContent = !this.toggleContent;
    //     }else{
    //       $('#content').css('min-width', '85vw');
    //       this.toggleContent = !this.toggleContent;
    //     }
    //   });
    // });
  }



  toggleApp(event) {
    this.toggleMyApp = event.target.innerHTML;
    this.sideBarToggle();
  }

  sideBarToggle() {

    const toggleSideBarCollapse = document.getElementById('sidebarCollapse');
    const toggleSideBar = document.getElementById('sidebar');
    const changeWidth = document.getElementById('content');

    if (toggleSideBarCollapse !== null || toggleSideBar !== null) {
      if (this.toggleContent) {
        toggleSideBarCollapse.classList.add('active');
        toggleSideBar.classList.add('active');
        changeWidth.style.minWidth = '100vw';
      } else {
        toggleSideBarCollapse.classList.remove('active');
        toggleSideBar.classList.remove('active');
        changeWidth.style.minWidth = '85vw';
      }
    }


    this.toggleContent = !this.toggleContent;
  }


}


import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import * as $ from "jquery";

@Component({
  selector: 'app-sidebar-component',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {

  constructor(private router: Router) {
    /*
    router.events.subscribe(event => {

      if (event instanceof NavigationEnd) {
        console.log("current url", event.url); // event.url has current url

        if (event.url.indexOf('games') > -1) {
          $('.sidebarBox ul li').removeClass();
          $('#liGames').addClass('li-active-link');
        }
      }
    });
    */

  }

  stickyMenu(et) {
    //$('.sidebarBox ul li').removeClass();
    //$(et).parent().addClass('li-active-link');
  }
}

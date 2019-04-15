import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Event, NavigationStart, NavigationEnd, NavigationError } from '@angular/router';
import * as $ from "jquery";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title = 'app';
  currentUrl = '';
  public pageTitleBackImg = '';

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
    router.events.subscribe((event: Event) => {
      //console.log(event);

      if (event instanceof NavigationEnd) {
        this.currentUrl = event.url;
        this.pageTitleBackImg = 'url(assets/cyber' + this.currentUrl.toLowerCase().replace('/', '') + '.jpg)';
      }

      console.log('this.pageTitleBackImg: ' + this.pageTitleBackImg);
    });
  }

  ngOnInit() {
    
  }
}

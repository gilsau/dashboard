import { Component } from '@angular/core';
import { AppComponent } from '../../app/app.component';

@Component({
  selector: 'app-newsfeed-component',
  templateUrl: './newsfeed.component.html'
})
export class NewsFeedComponent {
  constructor(app: AppComponent) {
    app.title = "News Feeds";
  }
}

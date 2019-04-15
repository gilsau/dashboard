import { Component } from '@angular/core';
import { AppComponent } from '../../app/app.component';

@Component({
  selector: 'app-friendFeed-component',
  templateUrl: './friendFeed.component.html',
  styleUrls: ['./friendFeed.component.css']
})
export class FriendFeedComponent {
  constructor(app: AppComponent) {
    app.title = "Friend Feed";
  }
}

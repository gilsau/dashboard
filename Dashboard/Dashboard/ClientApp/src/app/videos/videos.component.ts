import { Component } from '@angular/core';
import { AppComponent } from '../../app/app.component';

@Component({
  selector: 'app-videos-component',
  templateUrl: './videos.component.html'
})
export class VideosComponent {
  constructor(app: AppComponent) {
    app.title = "My Videos";
  }
}

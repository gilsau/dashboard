import { Component } from '@angular/core';
import { AppComponent } from '../../app/app.component';

@Component({
  selector: 'app-youtube-component',
  templateUrl: './youtube.component.html',
  styleUrls: ['./youtube.component.css']
})
export class YouTubeComponent {
  constructor(app: AppComponent) {
    app.title = "YouTube";
  }
}

import { Component } from '@angular/core';
import { AppComponent } from '../../app/app.component';

@Component({
  selector: 'app-photos-component',
  templateUrl: './photos.component.html'
})
export class PhotosComponent {
  constructor(app: AppComponent) {
    app.title = "My Photos";
  }
}

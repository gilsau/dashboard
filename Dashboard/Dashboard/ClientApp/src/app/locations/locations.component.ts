import { Component } from '@angular/core';
import { AppComponent } from '../../app/app.component';

@Component({
  selector: 'app-locations-component',
  templateUrl: './locations.component.html'
})
export class LocationsComponent {
  constructor(app: AppComponent) {
    app.title = "My Favorite Map Locations";
  }
}

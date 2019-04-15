import { Component } from '@angular/core';
import { AppComponent } from '../../app/app.component';

@Component({
  selector: 'app-weather-component',
  templateUrl: './weather.component.html'
})
export class WeatherComponent {
  constructor(app: AppComponent) {
    app.title = "Weather News";
  }
}

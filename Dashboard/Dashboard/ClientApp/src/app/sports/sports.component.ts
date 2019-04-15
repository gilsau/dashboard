import { Component } from '@angular/core';
import { AppComponent } from '../../app/app.component';

@Component({
  selector: 'app-sports-component',
  templateUrl: './sports.component.html'
})
export class SportsComponent {
  constructor(app: AppComponent) {
    app.title = "Sports News";
  }

}

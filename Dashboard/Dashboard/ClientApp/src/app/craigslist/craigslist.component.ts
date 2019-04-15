import { Component } from '@angular/core';
import { AppComponent } from '../../app/app.component';

@Component({
  selector: 'app-craigslist-component',
  templateUrl: './craigslist.component.html',
  styleUrls: ['./craigslist.component.css']
})
export class CraigslistComponent {
  constructor(app: AppComponent) {
    app.title = "Craigslist";
  }
}

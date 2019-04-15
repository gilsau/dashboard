import { Component } from '@angular/core';
import { AppComponent } from '../../app/app.component';

@Component({
  selector: 'app-offerup-component',
  templateUrl: './offerup.component.html',
  styleUrls: ['./offerup.component.css']
})
export class OfferUpComponent {
  constructor(app: AppComponent) {
    app.title = "OfferUp";
  }
}

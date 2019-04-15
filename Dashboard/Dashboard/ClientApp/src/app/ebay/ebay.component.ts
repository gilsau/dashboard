import { Component } from '@angular/core';
import { AppComponent } from '../../app/app.component';

@Component({
  selector: 'app-ebay-component',
  templateUrl: './ebay.component.html',
  styleUrls: ['./ebay.component.css']
})
export class EbayComponent {
  constructor(app: AppComponent) {
    app.title = "Ebay";
  }
}

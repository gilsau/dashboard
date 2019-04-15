import { Component } from '@angular/core';
import { AppComponent } from '../../app/app.component';

@Component({
  selector: 'app-fbmarketplace-component',
  templateUrl: './fbmarketplace.component.html',
  styleUrls: ['./fbmarketplace.component.css']
})
export class FBMarketplaceComponent {
  constructor(app: AppComponent) {
    app.title = "Facebook Marketplace";
  }
}

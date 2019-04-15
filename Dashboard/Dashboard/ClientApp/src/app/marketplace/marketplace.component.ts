import { Component } from '@angular/core';
import { AppComponent } from '../../app/app.component';

@Component({
  selector: 'app-marketplace-component',
  templateUrl: './marketplace.component.html'
})
export class MarketplaceComponent {
  constructor(app: AppComponent) {
    app.title = "Dash Marketplace";
  }
}

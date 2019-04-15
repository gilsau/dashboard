import { Component } from '@angular/core';
import { AppComponent } from '../../app/app.component';

@Component({
  selector: 'app-stocks-component',
  templateUrl: './stocks.component.html'
})
export class StocksComponent {
  constructor(app: AppComponent) {
    app.title = "Stocks Feed";
  }

}

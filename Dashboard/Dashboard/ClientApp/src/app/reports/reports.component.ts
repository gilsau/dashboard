import { Component } from '@angular/core';
import { AppComponent } from '../../app/app.component';

@Component({
  selector: 'app-reports-component',
  templateUrl: './reports.component.html'
})
export class ReportsComponent {
  constructor(app: AppComponent) {
    app.title = "Sales Reports";
  }
}

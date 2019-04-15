import { Component } from '@angular/core';
import { AppComponent } from '../../app/app.component';

@Component({
  selector: 'app-amazon-component',
  templateUrl: './amazon.component.html',
  styleUrls: ['./amazon.component.css']
})
export class AmazonComponent {
  constructor(app: AppComponent) {
    app.title = "Amazon";
  }
}

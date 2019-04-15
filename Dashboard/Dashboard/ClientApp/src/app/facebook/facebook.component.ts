import { Component } from '@angular/core';
import { AppComponent } from '../../app/app.component';

@Component({
  selector: 'app-facebook-component',
  templateUrl: './facebook.component.html',
  styleUrls: ['./facebook.component.css']
})
export class FacebookComponent {
  constructor(app: AppComponent) {
    app.title = "Facebook";
  }
}

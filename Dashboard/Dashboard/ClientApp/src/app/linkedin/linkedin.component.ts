import { Component } from '@angular/core';
import { AppComponent } from '../../app/app.component';

@Component({
  selector: 'app-linkedin-component',
  templateUrl: './linkedin.component.html',
  styleUrls: ['./linkedin.component.css']
})
export class LinkedinComponent {
  constructor(app: AppComponent) {
    app.title = "LinkedIn";
  }
}

import { Component } from '@angular/core';
import { AppComponent } from '../../app/app.component';

@Component({
  selector: 'app-links-component',
  templateUrl: './links.component.html'
})
export class LinksComponent {
  constructor(app: AppComponent) {
    app.title = "My Favorite Links";
  }
}

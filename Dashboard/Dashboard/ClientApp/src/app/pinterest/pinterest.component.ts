import { Component } from '@angular/core';
import { AppComponent } from '../../app/app.component';

@Component({
  selector: 'app-pinterest-component',
  templateUrl: './pinterest.component.html',
  styleUrls: ['./pinterest.component.css']
})
export class PinterestComponent {
  constructor(app: AppComponent) {
    app.title = "Pinterest";
  }
}

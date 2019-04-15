import { Component } from '@angular/core';
import { AppComponent } from '../../app/app.component';

@Component({
  selector: 'app-forums-component',
  templateUrl: './forums.component.html'
})
export class ForumsComponent {
  constructor(app: AppComponent) {
    app.title = "Forums";
  }
}

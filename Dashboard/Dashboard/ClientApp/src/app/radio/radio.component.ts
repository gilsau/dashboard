import { Component } from '@angular/core';
import { AppComponent } from '../../app/app.component';

@Component({
  selector: 'app-radio-component',
  templateUrl: './radio.component.html'
})
export class RadioComponent {
  constructor(app: AppComponent) {
    app.title = "Listen to Radio";
  }
}

import { Component } from '@angular/core';
import { AppComponent } from '../../app/app.component';

@Component({
  selector: 'app-settings-component',
  templateUrl: './settings.component.html'
})
export class SettingsComponent {

  constructor(app: AppComponent) {
    app.title = "Settings";
  }

}

import { Component } from '@angular/core';
import { AppComponent } from '../../app/app.component';

@Component({
  selector: 'app-profile-component',
  templateUrl: './profile.component.html'
})
export class ProfileComponent {
  constructor(app: AppComponent) {
    app.title = "My Profile";
  }
}

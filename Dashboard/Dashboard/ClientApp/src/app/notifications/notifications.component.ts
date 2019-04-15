import { Component } from '@angular/core';
import { AppComponent } from '../../app/app.component';

@Component({
  selector: 'app-notifications-component',
  templateUrl: './notifications.component.html'
})
export class NotificationsComponent {
  constructor(app: AppComponent) {
    app.title = "Notifications";
  }
}

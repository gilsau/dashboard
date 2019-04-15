import { Component } from '@angular/core';
import { AppComponent } from '../../app/app.component';

@Component({
  selector: 'app-messages-component',
  templateUrl: './messages.component.html'
})
export class MessagesComponent {
  constructor(app: AppComponent) {
    app.title = "Messages";
  }
}

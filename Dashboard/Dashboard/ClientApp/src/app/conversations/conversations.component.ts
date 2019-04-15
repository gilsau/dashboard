import { Component } from '@angular/core';
import { AppComponent } from '../../app/app.component';

@Component({
  selector: 'app-conversations-component',
  templateUrl: './conversations.component.html'
})
export class ConversationsComponent {
  constructor(app: AppComponent) {
    app.title = "Chat Conversations";
  }
}

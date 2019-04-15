import { Component } from '@angular/core';
import { AppComponent } from '../../app/app.component';

@Component({
  selector: 'app-invites-component',
  templateUrl: './invites.component.html'
})
export class InvitesComponent {
  constructor(app: AppComponent) {
    app.title = "Invitations";
  }
}

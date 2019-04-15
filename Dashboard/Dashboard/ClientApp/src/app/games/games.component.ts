import { Component } from '@angular/core';
import { AppComponent } from '../../app/app.component';

@Component({
  selector: 'app-games-component',
  templateUrl: './games.component.html'
})
export class GamesComponent {
  constructor(app: AppComponent) {
    app.title = "Games";
  }
}

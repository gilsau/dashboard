import { Component } from '@angular/core';
import { AppComponent } from '../../app/app.component';

@Component({
  selector: 'app-letgo-component',
  templateUrl: './letgo.component.html',
  styleUrls: ['./letgo.component.css']
})
export class LetGoComponent {
  constructor(app: AppComponent) {
    app.title = "LetGo";
  }
}

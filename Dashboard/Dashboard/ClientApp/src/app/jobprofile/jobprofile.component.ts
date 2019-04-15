import { Component } from '@angular/core';
import { AppComponent } from '../../app/app.component';

@Component({
  selector: 'app-jobprofile-component',
  templateUrl: './jobprofile.component.html',
  styleUrls: ['./jobprofile.component.css']
})
export class JobProfileComponent {
  constructor(app: AppComponent) {
    app.title = "My Job Profile";
  }
}

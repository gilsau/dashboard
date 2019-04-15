import { Component } from '@angular/core';
import { AppComponent } from '../../app/app.component';

@Component({
  selector: 'app-postjob-component',
  templateUrl: './postjob.component.html',
  styleUrls: ['./postjob.component.css']
})
export class PostJobComponent {
  constructor(app: AppComponent) {
    app.title = "Post A Job";
  }
}

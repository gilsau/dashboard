import { Component } from '@angular/core';
import { AppComponent } from '../../app/app.component';

@Component({
  selector: 'app-findprofessionals-component',
  templateUrl: './findprofessionals.component.html',
  styleUrls: ['./findprofessionals.component.css']
})
export class FindProfessionalsComponent {
  constructor(app: AppComponent) {
    app.title = "Find Professionals";
  }
}

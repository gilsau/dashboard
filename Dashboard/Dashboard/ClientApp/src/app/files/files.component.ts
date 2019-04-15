import { Component } from '@angular/core';
import { AppComponent } from '../../app/app.component';

@Component({
  selector: 'app-files-component',
  templateUrl: './files.component.html'
})
export class FilesComponent {
  constructor(app: AppComponent) {
    app.title = "Files";
  }
}

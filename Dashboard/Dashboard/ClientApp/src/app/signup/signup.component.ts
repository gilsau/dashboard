import { Component, OnInit } from '@angular/core';
import { User } from '../models/user.model';
import { NgForm } from '@angular/forms';
import { AppComponent } from '../../app/app.component';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  user: User;

  constructor(app: AppComponent) {
    app.title = "Sign Up";
  }

  ngOnInit() {
    this.resetForm();
  }

  resetForm(form?: NgForm) {

    if (form != null) {
      form.reset();
      this.user = {
        UserName: '',
        Password: '',
        Email: '',
        FirstName: '',
        LastName: ''
      }
    }
  }

}

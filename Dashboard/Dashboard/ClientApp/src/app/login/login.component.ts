import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-login-component',
  templateUrl: './login.component.html'
})
export class LoginComponent {

  constructor(private route: ActivatedRoute, private userSvc:UserService ) { }

  ngOnInit() {

    console.log('first user: ' + this.userSvc.getFirstUser());


    let logout = 0;

    this.route.paramMap.subscribe(params => {
      logout = this.route.snapshot.params.logout;
    });

    //logout user
    if (logout == 1) {
      
    }

    //check if user is logged in, if so, redirect user to home page
    else {
      
    }
  }

  public pageTitle = 'Login';
}

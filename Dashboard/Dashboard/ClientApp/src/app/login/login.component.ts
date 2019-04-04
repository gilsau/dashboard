import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login-component',
  templateUrl: './login.component.html'
})
export class LoginComponent {

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    let logout = 0;

    this.route.paramMap.subscribe(params => {
      logout = this.route.snapshot.params.logout;
    });

    if (logout == 1) {
      console.log('logout the user');
    }
    else {
      console.log('user is still logged in');
    }
  }

  public pageTitle = 'Login';
}

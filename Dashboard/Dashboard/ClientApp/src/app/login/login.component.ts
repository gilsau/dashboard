import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../services/user.service';
import { CookieService } from '../services/cookie.service';
import { AppComponent } from '../../app/app.component';

@Component({
  selector: 'app-login-component',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private route: ActivatedRoute, private userSvc: UserService, private cookieSvc: CookieService, app: AppComponent) {
    app.title = "Login";
  }
  
  ngOnInit() {

    //check logout param
    let logout = 0;
    this.route.paramMap.subscribe(params => {
      logout = this.route.snapshot.params.logout;
    });
    
    //logout user
    if (logout == 1) {
      let isLoggedIn = this.cookieSvc.getCookie('UserGUID') !== null;

      //delete cookie
      if (isLoggedIn) {
        this.cookieSvc.delCookie('UserGUID');
      }
    }
  }

  public pageTitle = 'Login';
}

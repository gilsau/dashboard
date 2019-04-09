import { Injectable } from '@angular/core';
import * as $ from "jquery"

@Injectable()
export class CookieService {

  constructor() { }

  //Set cookie
  public setCookie(cName:string, cVal:string) {
    $.cookie(cName, cVal, { expires: 3650, path: '/', domain: document.location.hostname, secure: true, raw: true });
  }
    
  //Read cookie
  public getCookie(cName:string) {
    return $.cookie(cName);
  }

  //Delete cookie
  public delCookie(cName: string) {
    $.cookie(cName, null);
  }
}

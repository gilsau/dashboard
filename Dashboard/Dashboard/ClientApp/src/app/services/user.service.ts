import { Injectable } from '@angular/core';

@Injectable()
export class UserService {

  constructor() { }

  users: string[] = ['john', 'sheila', 'tom'];

  getFirstUser() {
    return this.users[0];
  }
}

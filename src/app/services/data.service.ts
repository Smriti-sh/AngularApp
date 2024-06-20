import { Injectable } from '@angular/core';
import { User } from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  users: User[]=[];

  constructor() { 

    this.users = [
      {
        firstname:'John',
        lastName:'doe',
        email: 'dfgh@fghj.com',
        registered: new Date('2001-04-18T13:30:00'),
        hide:true
      },
      {
        firstname:'Kevin',
        lastName:'johnson',
        email: 'dfgh@fghj.com',
        isActive:true,
        registered: new Date('1996-10-16T13:30:00'),
        hide:true
      },
      {
        firstname:'Phil',
        lastName:'Dunphy',
        email: 'dfgh@fghj.com',
        // The standard format is: YYYY-MM-DDTHH:mm:ss.sssZ
        registered: new Date('2002-06-20T13:30:00'),
        hide:true
      }
    ];
  }

  getUsers(): User[] {
    console.log('Fetching users from service');
    return this.users;
  }

  addUser(user:User){
    this.users.unshift(user);
  }
}

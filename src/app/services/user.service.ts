import { Injectable } from '@angular/core';
import { User } from '../models/User';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  users: User[]=[];
  //observable property
  data: Observable <any> = of([]);     //Array<any> means the Observable emits an array where the type of the 
  //of function returns an Observable that emits the provided value (here, an empty array []) and then completes.
  //When subscribed to, this Observable will immediately emit the empty array ([]) and then complete the sequence.
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

  //is called, creating the Observable but not starting emissions yet.
  getData(){
    //we can subscribe to this observable which will give us an open stream
    this.data = new Observable(observer => {

       setTimeout(()=>{
        observer.next(1);
       },1000);

       setTimeout(()=>{
        observer.next(2);
       },2000);

       setTimeout(()=>{
        observer.next(3);
       },3000);

       setTimeout(()=>{
        observer.next({naam: 'Brad'});
       },4000);
    });
    return this.data;
  }

  getUsers(): Observable<User[]> {
    return of(this.users);
  }

  addUser(user:User){
    this.users.unshift(user);
  }
}

import { Component, OnInit } from '@angular/core';
import { User } from '../models/User';
import { url } from 'inspector';
// import { NgZone } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent implements OnInit {

  users:User[] =[];
  showExtended:boolean=true;
  //when loading externally
  loaded:boolean = false;
  enableAdd: boolean = true;
  currentClasses= {};  //initially setting it to empty object
  currentStyles= {};

  constructor(){}

  ngOnInit(){

    //for cases when we fetch users from a server that took like 2 seconds to load or something like that
    //and we can do that by using a setTimeout
      // setTimeout(() => {
  //       //users property wiz an array of user objects
        // this.users = [
        //   {
        //     firstname:'john',
        //     lastName:'doe',
        //     age:30,
        //     address:{
        //       street:'50 Main St.',
        //       city:'Boston',
        //       state:'MA'
        //     }
        //   },
        //   {
        //     firstname:'kevin',
        //     lastName:'johnson',
        //     age:34,
        //     address:{
        //       street:'50 hola St.',
        //       city:'cosco',
        //       state:'LA'
        //     }
        //   },
        //   {
        //     firstname:'phil',
        //     lastName:'dunphy',
        //     age:40,
        //     address:{
        //       street:'50 bell St.',
        //       city:'xyz',
        //       state:'K'
        //     }
        //   }
        // ];
        // this.loaded = true;
      // },10000);
    

    this.showExtended = true;

  //   this.addUser(
  //     {
  //     firstname:'david',
  //     lastName:'jackson',
  //     age:12,
  //     address:{
  //       street:'50 sun St.',
  //       city:'xyz',
  //       state:'K'
  //     }
  //   });
  // }
this.users = [
      {
        firstname:'John',
        lastName:'doe',
        age:30,
        address:{
          street:'50 Main St.',
          city:'Boston',
          state:'MA'
        },
        image:  'https://fastly.picsum.photos/id/87/200/300.jpg?hmac=YgijkxA35wxtPYqEsxGObDtNAlK3MVmNNb8ZH8IX1Rs',
        balance:100,
        registered: new Date('2001-04-18T13:30:00')
      },
      {
        firstname:'Kevin',
        lastName:'johnson',
        age:34,
        address:{
          street:'50 hola St.',
          city:'cosco',
          state:'LA'
        },
        image: 'https://fastly.picsum.photos/id/87/200/300.jpg?hmac=YgijkxA35wxtPYqEsxGObDtNAlK3MVmNNb8ZH8IX1Rs',
        isActive:true,
        balance:100,
        registered: new Date('1996-10-16T13:30:00')
      },
      {
        firstname:'Phil',
        lastName:'Dunphy',
        age:40,
        address:{
          street:'50 bell St.',
          city:'xyz',
          state:'K'
        },
        image: 'https://fastly.picsum.photos/id/87/200/300.jpg?hmac=YgijkxA35wxtPYqEsxGObDtNAlK3MVmNNb8ZH8IX1Rs',
        balance:100,
        // The standard format is: YYYY-MM-DDTHH:mm:ss.sssZ
        registered: new Date('2002-06-20T13:30:00')
      }
    ];
    this.loaded = true;

    this.setCurrentClasses();
    this.setCurrentStyles();
}

setCurrentClasses(){
  this.currentClasses = {
    'btn-success': this.enableAdd,
    'big-text': this.showExtended
  }
}
  addUser(user:User){
    this.users.push(user);
  }

setCurrentStyles(){
  this.currentStyles={
    'padding-top': this.showExtended ? '0' : '30px',
    'font-size':this.showExtended ? '':'30px'
  }
}

}

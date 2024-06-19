import { Component, OnInit } from '@angular/core';
import { User } from '../models/User';
import { url } from 'inspector';
import { FormsModule } from '@angular/forms';
// import { NgZone } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent implements OnInit {

  //property to bin form data
  user:User={
    firstname:'',
    lastName:'',
    age:0,    //cant assign null
    address:{
      street:'',
      city:'',
      state:''
    }
  };
  users:User[] =[];
  showExtended:boolean=true;
  //when loading externally
  loaded:boolean = false;
  enableAdd: boolean = false; 
  showUserForm:boolean=false;

  constructor(){}

  ngOnInit(){

// this.showExtended = true;

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
        registered: new Date('2001-04-18T13:30:00'),
        hide:true
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
        isActive:true,
        registered: new Date('1996-10-16T13:30:00'),
        hide:true
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
        // The standard format is: YYYY-MM-DDTHH:mm:ss.sssZ
        registered: new Date('2002-06-20T13:30:00'),
        hide:true
      }
    ];
    this.loaded = true;


}

toggleHide(user:User){
  // user.hide= false;   this one only unhides the content 
  user.hide= !user.hide; //to hide and unhide it
}

  addUser(){
    this.user.isActive = true;
    this.user.registered= new Date();
    this.users.unshift(this.user);
    // to clear out the form
    this.user={
      firstname:'',
      lastName:'',
      age:0,    //cant assign null
      address:{
        street:'',
        city:'',
        state:''
    }
  }
  }

  onSubmit(e:any){
    
    console.log(123);
    e.preventDefault();
  }

  fireEvent(e:any){
    // console.log("Button Clicked");
    console.log(e.type);
    console.log(e.target.value);
  }
}

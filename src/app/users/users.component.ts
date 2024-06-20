import { Component, OnInit , ViewChild} from '@angular/core';
import { User } from '../models/User';
import { url } from 'inspector';
import { FormsModule, NgForm } from '@angular/forms';
// import { NgZone } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent implements OnInit {

  @ViewChild('userForm') form: any;

  //property to bin form data
  user:User={
    firstname:'',
    lastName:'',
    email: ''
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
    this.loaded = true;


}


// onSubmit({value,valid}: {value:User, valid:boolean})
onSubmit({value,valid}: NgForm){
  if (!valid) {
    console.log('form is not valid');
    
  } else {
    value.isActive = true;
    value.registered= new Date();
    value.hide=true;
    this.users.unshift(value);

    this.form.reset();
  }
}


  // fireEvent(e:any){
  //   // console.log("Button Clicked");
  //   console.log(e.type);
  //   console.log(e.target.value);
  // }

  toggleHide(user:User){
    // user.hide= false;   this one only unhides the content 
    user.hide= !user.hide; //to hide and unhide it
  }
}

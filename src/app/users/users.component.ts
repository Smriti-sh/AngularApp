import { Component, OnInit , ViewChild} from '@angular/core';
import { User } from '../models/User';
import { url } from 'inspector';
import { FormsModule, NgForm } from '@angular/forms';
import { DataService } from '../services/data.service';
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

  constructor(private dataService:DataService){
    // dataService variable will allow us to access any method from DataService
    // inject service as a dependencies

  }

  ngOnInit(){

this.users = this.dataService.getUsers();

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
    // this.users.unshift(value);
    this.dataService.addUser(value);

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

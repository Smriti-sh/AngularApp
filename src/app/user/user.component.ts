import { Component } from '@angular/core';
import { User } from '../models/User';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  //prpoperties
  //! is to show that the user will not be left empty
  user!:User;

  //runs when a component is initialised
  constructor(){ 
  }

  ngOnInit(){
    this.user={
      firstname:'john',
      lastName:'doe',
      age:30,
      address:{
        street:'50 Main St.',
        city:'Boston',
        state:'MA'
      }
    }
  }
}

  
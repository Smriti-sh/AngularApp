export interface User{
    firstname:string,
    lastName:string,
    // properties with ? are not mandatory
    age:number,
    address?:{
      street?:string,
      city?:string,
      state?:string
    }
    image?:string,
    isActive?:boolean,
    balance?: number,
    registered?:any
  }
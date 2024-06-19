export interface  User{
    firstname:string,
    lastName:string,
    // properties with ? are not mandatory
    email: string,
    isActive?:boolean,
    registered?:any,
    hide?:boolean
  }
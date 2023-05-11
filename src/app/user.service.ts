import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
firstName:string="";
lastName:string="";
emailId:string="";
  constructor() { }
saveUserDetails(data:any){
this.firstName=data["firstName"];
this.lastName=data["lastName"];
this.emailId=data["emailId"];
  }
}

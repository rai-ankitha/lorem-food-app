import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http : HttpClient) { }
  postSignupDetails(email:any,password:any){

    const body = {
      "emailId" : email,
      "password": password
    }

    return this.http.post(environment.url +'',body);
  }
  postLoginDetails(email:any,password:any){

    const body = {
      "emailId" : email,
      "password": password
    }

    return this.http.post(environment.url +'',body);
  }
  postEmail(email:any){
    return this.http.get(environment.url +''+email);
  }
  verifyEmail(email:any,otp:any,isregister:any){

    const body = {
      "emailId" : email,
      "otp" : otp,
      "isregister":isregister
    }
    return this.http.post(environment.url +'',body);
}
createUser(email:any,firstName:any,lastName:any,password:any,mobile:any){
if(mobile!=null){
  const body = {
    "emailId" : email,
    "firstName" : firstName,
    "lastName":lastName,
    "password":password,
    "mobileNo":mobile
   
  }
  return this.http.post(environment.url +'',body);
}
else{
  const body = {
    "emailId" : email,
    "firstName" : firstName,
    "lastName":lastName,
    "password":password,
   
  }
  return this.http.post(environment.url +'',body);
}
 
}

resetPasswordEmail(mobileEmail:any,code:any,password:any){

  const body = {
      "emailId" : mobileEmail,
      "secretCode" : code,
      "newPassword":password
    
    }
    return this.http.put(environment.url +'',body);
}
}

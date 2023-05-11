import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ApiResponse } from '../models/restaurant-list';

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

    return this.http.post(environment.url +'api/user/login',body);
  }
  postLoginDetails(email:any,password:any){

    const body = {
      "emailId" : email,
      "password": password
    }

    return this.http.post(environment.url +'api/user/login',body);
  }
  postEmail(email:any){
    return this.http.get<ApiResponse>(environment.url +'api/user/email/'+email,);
  }
  generateOtp(email:any){
    return this.http.get<ApiResponse>(environment.url +'api/user/generate-otp/'+email);
  }
  verifyEmail(email:any,otp:any,isregister:any){

    const body = {
      "emailId" : email,
      "otp" : otp,
      "isregister":isregister
    }
    return this.http.post<ApiResponse>(environment.url +'api/user/validate-otp',body,);
}
createUser(email:any,firstName:any,lastName:any,mobile:any,password:any,){
  console.log(`mobile is ${mobile}`);
if(mobile!=null){
  const body = {
    "emailId" : email,
    "firstName" : firstName,
    "lastName":lastName,
    "password":password,
    "mobileNo":mobile
   
  }
  return this.http.post(environment.url +'api/user/register',body);
}
else{
  const body = {
    "emailId" : email,
    "firstName" : firstName,
    "lastName":lastName,
    "password":password,
   
  }
  return this.http.post(environment.url +'api/user/register',body);
}
 
}

resetPasswordEmail(email:any,password:any,code:any){

  const body = {
      "emailId" : email,
      "secretCode" : code,
      "newPassword":password
    
    }
    return this.http.put<ApiResponse>(environment.url +'api/user/update-password',body);
}


}

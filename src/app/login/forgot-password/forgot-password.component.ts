import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent {
  isSendOtp=false;
  forgotForm!:FormGroup;
  
  constructor(private router: Router,private fb: FormBuilder) {
    this.createForm();
  }
  createForm() {
    this.forgotForm = this.fb.group({
      forgotEmail: ['',[ Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$") ]],
      // mobileNumber:['', [Validators.required, Validators.pattern("[0-9 ]{10}")]],
    });
  }
  sendOtpFunc(){
    if(this.forgotForm.valid){
      console.log("submitted!!")
      this.isSendOtp=true;
    }
   
  }
  isEmailTab=true;
  isMobileTab=false;
  emailTab(){
    this.isEmailTab=true;
    this.isMobileTab=false
  }
  mobileTab(){
this.isMobileTab=true;
this.isEmailTab=false;
  }
 
}
